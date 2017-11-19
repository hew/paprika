import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PostPreviewBox = styled.div`
  position: relative;
  padding-top: 49%;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }

  > div > div {
    position: relative;
    background-color: white;
    padding: 32px;
    border-top: 2px solid #44bc8f;
  }
`

const PostPreview = ({url, img, date, excerpt, title, category, time}) => (
  <PostPreviewBox>
    <img src={img} />
    <Box p={2}>
      <div>
        <H4 mb={2}>{category} | {time} min read</H4>
        <Link to={`/blog${url}`}>
          <H3 mb={2} color={color.gray[3]}>
            {title}
          </H3>
        </Link>
        {/* <H5>{date}</H5> // TODO: figure this one out */}
        <p dangerouslySetInnerHTML={{ __html: excerpt }} />
      </div>
    </Box>
  </PostPreviewBox>
)

export default PostPreview;
