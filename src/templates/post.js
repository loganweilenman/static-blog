import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BlogPost extends Component {
    render() {
        const { title, publishedDate, content } = this.props.data.contentfulPost
        return (
            <div>
                <h1>
                    {title}
                </h1>
                <p>{publishedDate}</p>
                <div dangerouslySetInnerHTML={{__html:content.childMarkdownRemark.html}} />
            </div>
        )
    }
}

BlogPost.PropTypes = {
    data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
    query blogPostQuery($slug: String!){
        contentfulPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM DD, YYYY")
            content {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`