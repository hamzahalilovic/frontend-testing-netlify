import React, { createRef } from "react";

import { SearchSelect, Box, Label, Text } from "@blend-ui/core";

//import { Icon } from "@blend-ui/icons";
//import { Graphql } from "@blend-ui/icons";
//import { Icon, InlineIcon } from "@iconify/react";
//import { default as ChevronDown } from "@iconify/icons-fe/drop-down";

export default { title: "Search Select" };
/*
export default {
  title: "Icons",
};
//<BlendIcon icon={ChevronDown} title={"Add"} width={"36px"} color={"green"} />

export const addCircle = () => <div>Testing</div>;

addCircle.story = {
  name: "ADD",
};
*/
/*
const selectOptions = [
  { value: 0, option: "Economy" },
  { value: 1, option: "Premium Economy" },
  { value: 2, option: "Something" },
];
*/
const selectOptions = [
  {
    key: "0",
    value: "This is component",
    searchValue: "This is component +358",
    component: (
      <React.Fragment>
        <Text as="span">This is component</Text>
        <Text as="span">(+358)</Text>
      </React.Fragment>
    ),
  },
  { key: "1", value: "Premium Economy" },
  { key: "2", value: "Something" },
];
export const select = () => (
  <Box style={{ zIndex: 3 }}>
    <Label htmlFor="cabinClass">Cabin Class</Label>
    <SearchSelect
      id="cabinClass"
      name="cabinClass"
      defaultValue="1"
      options={selectOptions}
      onChange={e => {
        console.log("Change ", e.target.value);
      }}
    />
  </Box>
);
select.story = {
  name: "Search Select",
};
export const select2 = () => {
  const boxRef = createRef();

  return (
    <Box width={"200px"} ref={boxRef}>
      <Label htmlFor="cabinClass">Cabin Class</Label>
      <SearchSelect
        id="cabinClass"
        name="cabinClass"
        size={"xs"}
        defaultValue="000"
        options={selectOptions}
        onChange={(e, code) => {
          console.log("Change ", e);
          console.log("Change ", code);
        }}
        showList={true}
        selectOption={"key"}
        width={"50px"}
        containerRef={boxRef}
        containerOffset={"20px"}
      />
    </Box>
  );
};
select2.story = {
  name: "Search Select with full list visible",
};
