import React from 'react'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="my-5 is-size-4 has-text-justified has-text-left-mobile">
                                    {children}
                                </p>


const BodyTextTemplate = ({ richTextField }) => {
    const options = {
        renderMark: {
            [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        [BLOCKS.HEADING_4]: (node, children) => <h4 className="has-text-justified">{children}</h4>,
        [BLOCKS.HEADING_6]: (node, children) => <h6 className="has-text-justified">{children}</h6>
      },
    }

    return (
      renderRichText(richTextField, options)
    )
}

export default BodyTextTemplate