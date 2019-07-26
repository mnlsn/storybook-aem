import React, { useState } from "react";
import Compiler from "htl-compiler/dist/compiler";

async function compileHtlToHtml(htl, resourceData, useModels, resourceTypes) {
    const c = new Compiler(htl, resourceData, useModels, resourceTypes);
    return c.compile();
}

function createMarkupForReact(prop) {
    return {
        __html: prop
    };
}

const Wrapper = ({ file, options, resourceData, resourceTypes, useModels }) => {
    const [html, setHtml] = useState("<div>Loading...</div>");
    const [rendered, setRendered] = useState(false);

    if (!rendered) {
        const component = compileHtlToHtml(
            file,
            resourceData,
            useModels,
            resourceTypes
        );
        component
            .then(res => {
                if (res) {
                    // console.log(res);
                    setHtml(res);
                    setRendered(true);
                }
            })
            .catch(err => {
                if (err) {
                    setRendered(false);
                    console.error(err);
                }
            });
    }

    return (
        <div
            className="htl-component-wrapper"
            dangerouslySetInnerHTML={createMarkupForReact(html)}
        />
    );
};

export default Wrapper;
