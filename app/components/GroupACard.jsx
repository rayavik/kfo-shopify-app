
import {
    Card,
    Text,
    Collapsible,
    Button,
    Link,
    TextContainer,
    InlineStack,
  } from "@shopify/polaris";
  import { useState, useCallback } from "react";
  import { ToggleOffIcon } from "@shopify/polaris-icons";
import GroupALineItem from "./GroupALineItem";
  export default function GroupACard({ items ,comments}) {
    const [open, setOpen] = useState(false);
    const handleToggle = useCallback(() => setOpen((open) => !open), []);
    return (
      <div style={{ marginBottom: "2%" }}>
        <Card roundedAbove="sm">
          <InlineStack align="center" direction={"row"} blockAlign="center">
            <Button
              variant={open ? "primary" : "secondary"}
              open
              onClick={handleToggle}
              icon={ToggleOffIcon}
            >
             Group A-Board
            </Button>
          </InlineStack>
  
          <Collapsible
            open={open}
            id="basic-collapsible"
            transition={{ duration: "500ms", timingFunction: "ease-in-out" }}
            expandOnPrint
          >
           {
            items.length>0 && items.map((i)=>{
              return <GroupALineItem item={i} comments={comments}/>
            })
           }
          </Collapsible>
        </Card>
      </div>
    );
  }
  