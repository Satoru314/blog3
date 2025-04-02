export default function EachPost(props) {
    return (
      <article>
        <a href={props.url}>
          <h3>{props.title}</h3>
        </a>
        <a href="https://www.google.com/search?q=jr%E9%9B%A3%E6%B3%A2%E3%81%8B%E3%82%89jr%E6%B7%A1%E8%B7%AF&sca_esv=ef113eae1f4c563c&sxsrf=AHTn8zpIbl2yVM-3mxgazbxYdmGXqgmqYA%3A1743336903286&ei=xzXpZ_qeEcSnvr0Phc-p6Ag&ved=0ahUKEwi6nuCG5LGMAxXEk68BHYVnCo0Q4dUDCBA&uact=5&oq=jr%E9%9B%A3%E6%B3%A2%E3%81%8B%E3%82%89jr%E6%B7%A1%E8%B7%AF&gs_lp=Egxnd3Mtd2l6LXNlcnAiFmpy6Zuj5rOi44GL44KJanLmt6Hot68yBRAAGO8FMggQABiABBiiBDIIEAAYgAQYogQyBRAAGO8FMggQABiABBiiBEiJcVDxCViBa3AGeAGQAQCYAX-gAe4NqgEEMTIuNrgBA8gBAPgBAZgCGKAC5A7CAgoQABiwAxjWBBhHwgIFEAAYgATCAgcQABiABBgNwgIKECMYgAQYJxiKBcICCBAAGIAEGLEDwgIKEAAYgAQYQxiKBcICBxAAGIAEGBfCAgcQABiABBgEmAMAiAYBkAYEkgcFMTMuMTGgB5Q5&sclient=gws-wiz-serp">
          <h3>{props.children}</h3>
        </a>
      </article>
    )
  }