/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */

import React, { useRef, useState, useEffect, forwardRef } from "react";
import { usePrifina } from "@prifina/hooks";
import { BlendIcon } from "@blend-ui/icons";
import bxCog from "@iconify/icons-bx/bx-cog";

import html2canvas from "html2canvas";
import ReactDOM from "react-dom";
import { useSprings, animated } from "react-spring";

import { RemoteComponent } from "../RemoteComponent";
import { Tabs, Tab, TabList, TabPanel, TabPanelList } from "@blend-ui/tabs";
import i18n from "../lib/i18n";

//import widgetData from "./widgetData";
//import installedWidgets from "./installedWidgets";

import Amplify, { API as GRAPHQL, Storage } from "aws-amplify";
import config from "../config";

import gql from "graphql-tag";

import * as C from "./display-app/components";

//import { addSearchResultMutation, addSearchKeyMutation } from "../graphql/api";
import { addSearchResult, addSearchKey } from "../graphql/mutations";

const short = require("short-uuid");
import PropTypes from "prop-types";
i18n.init();

const APIConfig = {
  aws_appsync_graphqlEndpoint: config.appSync.aws_appsync_graphqlEndpoint,
  aws_appsync_region: config.main_region,
  aws_appsync_authenticationType: config.appSync.aws_appsync_authenticationType,
};

const AUTHConfig = {
  // To get the aws credentials, you need to configure
  // the Auth module with your Cognito Federated Identity Pool
  mandatorySignIn: false,
  userPoolId: config.cognito.USER_POOL_ID,
  identityPoolId: config.cognito.IDENTITY_POOL_ID,
  userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  region: config.main_region,
};

const S3Config = {
  AWSS3: {
    bucket: config.S3.bucket, //REQUIRED -  Amazon S3 bucket name
    region: config.S3.region, //OPTIONAL -  Amazon service region
  },
};

const fn = animations => index => animations[index];

const DisplayApp = ({ widgetConfigData, appSyncClient, prifinaID }) => {
  console.log("PROPS ", widgetConfigData, Object.keys(widgetConfigData));
  console.log("DISPLAY APP ", prifinaID);
  const {
    check,
    currentUser,
    getLocalization,
    getSettings,
    setSettings,
    getCallbacks,
    registerClient,
    API,
    Prifina,
    activeRole,
  } = usePrifina();

  console.log("DISPLAY APP ", currentUser);
  const WidgetHooks = new Prifina({ appId: "WIDGETS" });
  //console.log(check());
  Amplify.configure(S3Config);

  const [widgetList, setWidgetList] = useState([]);
  const [widgetConfig, setWidgetConfig] = useState(widgetConfigData);

  const [activeTab, setActiveTab] = useState(0);

  const [searchHistory, setSearchHistory] = useState(false);
  const searchBox = useRef();
  const [searchKey, setSearchKey] = useState("");

  const [open, setOpen] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const widgetImage = useRef();

  const settings = useRef({
    left: "0px",
    top: "0px",
    height: "0px",
    width: "0px",
    widget: -1,
  });

  const items = [{}, {}];
  const animationItems = useRef(items.map((_, index) => index));

  const [springs, setSprings] = useSprings(
    items.length,
    fn(animationItems.current),
  );

  const refs = useRef([]);
  const settingsRef = useRef([]);
  const widgetSettings = useRef(
    widgetConfigData.map((w, i) => {
      return {
        settings: w.widget.settings || [],
        title: w.widget.title,
        appId: w.widget.appID,
        installCount: w.widget.installCount,
        currentSetting: w.currentSetting,
      };
    }),
  );

  const roleKeys = ["", "work", "family", "hobbies"];
  const tabClick = (e, tab) => {
    console.log("Click", e);
    console.log("TAB", tab);
    setActiveTab(tab);
  };

  const takeSnapshot = async w => {
    const DEFAULT_PNG = {
      fileName: "component.png",
      type: "image/png",
      html2CanvasOptions: {},
    };
    if (w !== -1) {
      const ww = document.querySelectorAll(
        "[data-widget-index='" + w + "']",
      )[0];

      const element = ReactDOM.findDOMNode(ww);
      const canvas = await html2canvas(element, {
        scrollY: -window.scrollY,
        useCORS: true,
        //backgroundColor: null,
        ...DEFAULT_PNG,
      });
      const f = canvas.toDataURL(DEFAULT_PNG.type, 1.0);
      //console.log("FILE2 ", f);
      console.log("NEW SNAPSHOT TAKEN...");
      widgetImage.current = f;
      setOpen(true);
      //setWidgetImage(f);
    }
  };
  const openSettings = w => {
    if (!open) {
      console.log("CLICK...", w);
      //console.log("REFS...", refs.current[0].getBoundingClientRect());
      //const ww = refs.current[w].getBoundingClientRect();
      //console.log(document.querySelectorAll("[data-widget-index='" + w + "']"));

      const ww = document
        .querySelectorAll("[data-widget-index='" + w + "']")[0]
        .getBoundingClientRect();
      // const element = ReactDOM.findDOMNode(refs.current[settings.widget]);
      //const ww = { left: 0, top: 0, height: 0, width: 0 };
      console.log("WW...", ww);

      settings.current = {
        left: ww.left + "px",
        top: ww.top + "px",
        height: ww.height + "px",
        width: ww.width + "px",
        widget: w,
      };

      animationItems.current = [
        {
          opacity: 1,
          transform: `perspective(1000px) rotateY(0deg)`,
          height: ww.height + "px",
          width: ww.width + "px",
          visibility: "visible",
          reset: true,
          config: {
            mass: 5,
            tension: 500,
            friction: 80,
            duration: 1000,
          },
          onRest: () => {
            //setFlipped(true);
          },
          onStart: () => {
            //refs.current[0].style.visibility = "hidden";
          },
        },

        {
          delay: 500,
          reset: true,
          from: {
            transform: "none",
            width: ww.width + "px",
            height: ww.height + "px",
            visibility: "hidden",
          },
          to: {
            transform: "none",
            width: "400px",
            height: "400px",
            visibility: "hidden",
          },
        },
      ];

      setSprings(fn(animationItems.current));

      takeSnapshot(w);
      //setOpen(true);
    }
  };

  useEffect(() => {
    console.log("OPEN CHANGE ", open);
    if (open) {
      //console.log("REFS....", document.querySelectorAll(".prifina-widget[data-widget-index='0']"));
      //console.log("REFS....", document.querySelectorAll(".prifina-widget"));

      animationItems.current = [
        {
          opacity: 1,
          transform: `perspective(1000px) rotateY(180deg)`,
          width: settings.current.width,
          height: settings.current.height,
          visibility: "visible",
          config: { mass: 5, tension: 500, friction: 80 },
          reset: true,
          onStart: () => {
            // hide widget...
            //refs.current[settings.widget].style.visibility = "hidden";
          },
        },
        {
          delay: 500,
          reset: true,
          from: {
            transform: "none",
            width: settings.current.width,
            height: settings.current.height,
            visibility: "visible",
          },
          to: {
            transform: "none",
            width: "400px",
            height: "400px",
            visibility: "visible",
          },
          onStart: () => {
            if (settingsRef.current[0]) {
              //console.log("ENDS...", settingsRef.current[0]);
              setFlipped(true);
              //settingsRef.current[0].style.display = "none";
            }
          },
          onRest: () => {
            if (settingsRef.current[1]) {
              //console.log("ENDS...", settingsRef.current[1]);
              // settingsRef.current[0].style.visibility = "hidden";
            }
          },
        },
      ];

      setSprings(fn(animationItems.current));
    } else {
      if (settings.current.widget != -1) {
        console.log("INIT SPRINGS....");
        animationItems.current = [{}, {}];
        setSprings(fn(animationItems.current));
        setFlipped(false);
        settingsRef.current = [];
        settings.current = {
          left: "0px",
          top: "0px",
          height: "0px",
          width: "0px",
          widget: -1,
        };
      }
    }
  }, [open]);

  useEffect(() => {
    registerClient([appSyncClient, GRAPHQL, Storage]);
    /*
    let data = installedWidgets.map(w => {
      return {
        url: widgetData[w].url,
        settings: widgetData[w].settings.length > 0,
        currentSetting: {},
      };
    });
*/
    console.log("WIDGET CONFIG ", widgetConfig);
    /*
    //await getSettings(appID, "f902cbca-8748-437d-a7bb-bd2dc9d25be5")
    let allSettings = [];
    getSettings("", "f902cbca-8748-437d-a7bb-bd2dc9d25be5").then(res => {
      //console.log("SETTINGS ", res);
      const widgets = JSON.parse(res.data.getInstalledWidgets.installedWidgets);
      console.log("INSTALLED ", widgets);
      widgetSettings.current = widgetConfig.map((w, i) => {
        let defaultValues = {};
        if (w.settings) {
          w.widget.settings.forEach(v => {
            // if type=text...
            defaultValues[v.value] = "";
          });
          if (widgets.hasOwnProperty(w.widget.appID)) {
            //console.log("SEETINGS FOUND ", w.widget.appID);
            widgets[w.widget.appID].forEach(w => {
              if (defaultValues.hasOwnProperty(w.field)) {
                defaultValues[w.field] = w.value;
              }
            });
          }
        }
        widgetConfig[i].currentSetting = defaultValues;
        return {
          settings: w.widget.settings || [],
          title: w.widget.title,
          appId: w.widget.appID,
          currentSetting: defaultValues,
        };
      });

      console.log("WIDGET CONFIG 2", widgetConfig);
    });
    */
    /*
    widgetSettings.current = widgetConfig.map((w, i) => {
      let defaultValues = {};
      console.log("WIDGET SETTINGS ", w);
      if (w.settings) {
        w.widget.settings.forEach(v => {
          // if type=text...
          defaultValues[v.value] = "";
        });
        allSettings.push(getSettings(w));
      } else {
        allSettings.push(Promise.resolve({}));
      }

      return {
        settings: w.widget.settings || [],
        title: w.widget.title,
        appId: w.widget.appID,
        currentSetting: defaultValues,
      };
    });
    */
    /*
    Promise.all(allSettings).then(r => {
      //console.log("GET SETTINGS ", r);
      r.forEach((d, i) => {
        //console.log("GET SETTINGS 2", d);
        let defaultValues = {};
        if (Object.keys(d).length > 0) {
          Object.keys(d).forEach(k => {
            defaultValues[k] = d[k];
          });
          widgetConfig[i].currentSetting = defaultValues;
          widgetSettings.current[i].currentSetting = defaultValues;
        }
      });
      //console.log("WIDGET CONFIG ", data);
      //setWidgetConfig(data);
    });
    */
    /*
    console.log("GET SETTINGS ", d);
        if (Object.keys(d).length > 0) {
          Object.keys(d).forEach(k => {
            defaultValues[k] = d[k];
          });
        }
        data[i].currentSetting = defaultValues;

    console.log("WIDGET CONFIG ", data);
    setWidgetConfig(data);
    */
  }, []);

  useEffect(() => {
    if (widgetConfig.length > 0) {
      console.log("CREATE WIDGETS...");
      const widgets = widgetConfig.map((widget, i) => {
        console.log("WIDGET COMPONENT ", widget);
        //React.forwardRef((props, ref) =>

        const Widget = forwardRef((props, ref) => {
          console.log("W ", props);
          return (
            <React.Fragment>
              <div>
                {widget.settings && (
                  <C.IconDiv open={props.open} onClick={() => openSettings(i)}>
                    <BlendIcon iconify={bxCog} />
                  </C.IconDiv>
                )}
                <C.WidgetWrapper
                  className={"prifina-widget"}
                  data-widget-index={i}
                  key={"widget-wrapper-" + i}
                  ref={ref}
                >
                  <RemoteComponent url={widget.url} {...props} />
                </C.WidgetWrapper>
              </div>
            </React.Fragment>
          );
        });

        //const Widget = (props) => <RemoteComponent url={remoteUrl} {...props} />;

        //return <Widget key={"prifina-widget-" + i} test={"ok"} />;
        return Widget;
      });
      //refs.current = widgets;
      // <RemoteComponent url={remoteUrl} fallback={<div>Testing...</div>} />;
      console.log("WIDGETS ", widgets);

      setWidgetList(widgets);
    }
  }, [widgetConfig]);

  const onUpdate = data => {
    console.log("Update settings ", data);
    console.log("HOOK ", WidgetHooks);
    //console.log(getCallbacks());
    console.log(settings.current, widgetSettings);
    let newSettings = [];
    Object.keys(data).forEach(k => {
      widgetSettings.current[settings.current.widget].currentSetting[k] =
        data[k];
      newSettings.push({ field: k, value: data[k] });
    });
    const currentAppId = widgetSettings.current[settings.current.widget].appId;
    //"f902cbca-8748-437d-a7bb-bd2dc9d25be5"
    /*
    input WidgetSettingInput {
      field: String!
      value: String!
    }
*/
    console.log("NEW SETTINGS ", newSettings, currentAppId);
    // useCallback((appID, uuid, settings = [{}])
    setSettings(currentAppId, prifinaID, {
      type: "WIDGET",
      index: settings.current.widget,
      settings: newSettings,
    });
    const c = getCallbacks();
    console.log("CALLBACKS ", c);
    const widgetInstallCount =
      widgetSettings.current[settings.current.widget].installCount;
    console.log(
      " CALLBACK ",
      c.hasOwnProperty(currentAppId),
      widgetInstallCount,
    );
    console.log(" CALLBACK ", typeof c[currentAppId][widgetInstallCount]);
    if (
      c.hasOwnProperty(currentAppId) &&
      typeof c[currentAppId][widgetInstallCount] === "function"
    ) {
      console.log("FOUND CALLBACK ");
      c[currentAppId][widgetInstallCount]({ settings: data });
    }
    //setWidgetData([data]);
    //setOpen(false);
    //console.log(check());
    /*
    console.log(settings, widgetSettings[settings.current.widget]);
    const currentSettings = widgetSettings[settings.current.widget];
    console.log(prifina.getCallbacks());
    const c = prifina.getCallbacks();
    if (typeof c[currentSettings.appID] === "function") {
      prifina.setSettings(currentSettings.appID, data);
      c[currentSettings.appID](data);
      setOpen(false);
    }
    */
    setOpen(false);
  };

  const saveSearchKey = async searchKey => {
    if (searchKey.length > 0)
      await appSyncClient.mutate({
        mutation: gql(addSearchKey),
        variables: {
          input: {
            owner: currentUser.uuid,
            searchKey: searchKey,
            role: activeTab === 0 ? "" : roleKey[activeTab],
          },
        },
      });

    /*
      addSearchKeyMutation(GRAPHQL, {
        owner: currentUser.uuid,
        searchKey: searchKey,
        role: activeTab === 0 ? "" : roleKey[activeTab],
      });
      */
    /*
input SearchKeyInput {
	owner: String!
	searchKey: String
	role: String
}
*/
  };
  const saveSearchResult = async (searchKey, searchResult) => {
    if (searchKey.length > 0) {
      const searchBuckeyKey = "search-results/" + short.generate() + ".json";

      await appSyncClient.mutate({
        mutation: gql(addSearchResult),
        variables: {
          input: {
            owner: currentUser.uuid,
            searchKey: searchKey,
            role: activeTab === 0 ? "" : roleKey[activeTab],
            selectedResult: searchBuckeyKey,
          },
        },
      });

      /*
      addSearchResultMutation(GRAPHQL, {
        owner: currentUser.uuid,
        searchKey: searchKey,
        role: activeTab === 0 ? "" : roleKey[activeTab],
        selectedResult: searchBuckeyKey,
      });
      */
      await Storage.put(searchBuckeyKey, JSON.stringify(searchResult), {
        level: "public",
        contentType: "application/json",

        metadata: {
          owner: currentUser.uuid,
          searchKey: searchKey,
          created: new Date().toISOString(),
        },
      });
    }

    /*

input SearchResultInput {
	owner: String!
	searchKey: String!
	selectedResult: AWSJSON
}

*/
  };
  /*
  useEffect(() => {
    if (widgetList.length > 0) {
      const widgets = document.querySelectorAll(
        ".prifina-widget >*:first-child",
      );
      console.log(widgets);
      widgets.forEach((w, i) => {
        console.log(w.getBoundingClientRect());
      });
    }
  }, [widgetList]);
*/
  return (
    <>
      {open && (
        <C.ModalBackground
          className={"widget-modal"}
          onClick={e => {
            console.log("TARGET ", e);
            console.log("WIDGET SETTINGS ", refs.current, settings);
            console.log("MODAL ", e.target.className);

            /*
            console.log("CURRENT ", refs.current[settings.widget]);
            refs.current[settings.widget].style.visibility = "visible";
            */
            if (e.target.className.indexOf("widget-modal") > -1) {
              setOpen(false);
            }
          }}
        >
          {springs.map((props, i) => {
            console.log("IMAGE ", widgetImage);
            // widget settings...
            console.log(settings.current);
            console.log(widgetSettings);
            /*
            const title = widgetSettings.current[settings.current.widget].title;
            const settingsFields =
              widgetSettings.current[settings.current.widget].settings;
            const currentSetting =
              widgetSettings.current[settings.current.widget].currentSetting;
*/
            return (
              <animated.div
                style={{
                  transform: props.transform,

                  left: settings.current.left,
                  top: settings.current.top,
                  width: props.width,
                  height: props.height,
                  position: "absolute",
                  visibility: props.visibility,
                  zIndex: 2,
                }}
                ref={ref => {
                  if (ref !== null) settingsRef.current.push(ref);
                }}
                key={"animated-" + i}
              >
                <C.SettingsDiv>
                  {i === 0 && (
                    <img
                      src={widgetImage.current}
                      style={{
                        width: "100%",
                        height: "100%",
                        display: `${flipped ? "none" : "block"}`,
                      }}
                    />
                  )}
                  {flipped && i === 1 && (
                    <C.SettingsDialog
                      spring={i}
                      flipped={flipped}
                      open={open}
                      onUpdate={onUpdate}
                      widgetIndex={settings.current.widget}
                      widgetSetting={
                        widgetSettings.current[settings.current.widget]
                      }
                    />
                  )}
                </C.SettingsDiv>
              </animated.div>
            );
          })}
        </C.ModalBackground>
      )}
      <div style={{ overflow: "hidden" }}>
        <Tabs
          activeTab={activeTab}
          onClick={tabClick}
          style={{ height: "100%" }}
        >
          <TabList>
            <Tab>{currentUser.name}</Tab>
            <Tab>Work</Tab>
            <Tab>Family</Tab>
            <Tab>Hobbies</Tab>
          </TabList>
          <TabPanelList>
            <TabPanel
              style={{
                height: "100vh",
                paddingBottom: "50px",
                overflow: "auto",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <C.SearchBox
                  ref={searchBox}
                  showHistory={setSearchHistory}
                  chevronOpen={searchHistory}
                  searchKey={setSearchKey}
                  searchOpen={searchKey.length > 0}
                  saveSearchKey={saveSearchKey}
                />
                {searchKey.length > 0 && !searchHistory && (
                  <C.SearchResults
                    searchBox={searchBox}
                    searchKey={searchKey}
                    roleKey={roleKeys[activeTab]}
                    saveSearchResult={saveSearchResult}
                  />
                )}
                {searchHistory && <C.SearchHistory searchBox={searchBox} />}
              </div>
              <div style={{ overflow: "auto" }}>
                <C.WidgetContainer className={"prifina-widget-container"}>
                  {widgetList.length > 0 && (
                    <C.WidgetList
                      widgetList={widgetList}
                      widgetData={widgetConfig}
                    />
                  )}
                </C.WidgetContainer>
              </div>
            </TabPanel>
            <TabPanel>Work panel</TabPanel>
            <TabPanel>Family panel</TabPanel>
            <TabPanel>Hobbies panel</TabPanel>
          </TabPanelList>
        </Tabs>
      </div>
    </>
  );
};

DisplayApp.propTypes = {
  widgetConfigData: PropTypes.array.isRequired,
  appSyncClient: PropTypes.object.isRequired,
  prifinaID: PropTypes.string.isRequired,
  open: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  visibility: PropTypes.string,
  transform: PropTypes.string,
};
export default DisplayApp;
