import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({node}) => {
    return (
        <div>
            <h3><Link to={node.slug}>{node.title}</Link></h3>
        </div>
    )
}

const IndexPage = (props) => {

    console.log(props)
    return (
        <div>
            {props.data.allContentfulPost.edges.map((edge) => <BlogPost key={edge.node.id} node={edge.node} />)}
        </div>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query pageQuery {
        allContentfulPost(
            filter: {
                node_locale: {eq: "en-US"}
            },
            sort: {
                fields: [publishedDate], order: DESC
            }
        ) {
            edges {
                node {
                    id
                    title
                    slug
                }
            }
        }
    }
`