import React from "react";

import { storiesOf } from "@storybook/react";

import Wrapper from "../Wrapper";

import example from "html-loader!../components/example/example.html";
import resource from "html-loader!../components/example/foo-resource.html";

const resourceData = {
    foo: {
        test: "hello"
    },
    exampleGlobalValue: {
        nested: {
            deeplyNested: "hello"
        }
    },
    isCool: false,
    hello: "world",
    items: ["AAA", "BBB", "CCC"],
    anotherValue: "some other value"
};

storiesOf("HTL", module).add("Wrapper Component", () => (
    <Wrapper
        file={example}
        resourceTypes={{ foo: resource }}
        resourceData={resourceData}
        useModels={{
            "some.path.to.a.java.headerComponent": {
                title: "Hello",
                description: "this is a test of some basic HTL",
                showFirstName: true,
                showLastName: false,
                firstName: "Mike",
                lastName: "Nelson"
            },
            "some.path.to.a.java.ExampleClass": {
                title: "Example title",
                description: "Example description"
            },
            "some.path.to.a.java.FooClass": {
                example: "I am from FooClass",
                myList: ["one", "two", "three"]
            }
        }}
    />
));
