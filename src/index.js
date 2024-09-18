import React from 'react'
import PropTypes from 'prop-types'

class CodePen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  /**
   * when type is embed, load embed/ei.js first.
   */
  componentDidMount() {
    if (this.props.type === 'embed') {
      const EMBED_JS = 'https://static.codepen.io/assets/embed/ei.js'
      const loadEmbed = () => {
        const script = document.createElement('script');
        script.src = EMBED_JS;
        script.async = 1;
        document.body.appendChild(script);
      }
      loadEmbed();
    }
  }

  render() {
    const {
      type,
      user,
      hash,
      width,
      height,
      title,
      theme,
      editable,
      preview,
      tab
    } = this.props
    const UserLink = `https://codepen.io/${user}`
    const CodeSrc = `https://codepen.io/${user}/embed/${preview ? 'preview/' : ''}${hash}?theme-id=${theme}&editable=${editable}&height=${height}&default-tab=${tab}&user=${user}&slug-hash=${hash}&pen-title=${title || ''}`
    const PenLink = `${UserLink}/pen/${hash}`

    if (type === 'iframe') {
      return (
        <iframe
          width={width}
          height={height}
          style={{ width, height }}
          title={title || ''}
          src={CodeSrc}
          allowFullScreen={true}
          loading="lazy"
          allowtransparency="true"
        >
          See the Pen <a href={PenLink}>{title || ''}</a> by {user} (<a href={UserLink}>@{user}</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
      )
    }

    return (
      <p
        className="codepen"
        data-height={height}
        data-theme-id={theme}
        data-default-tab={tab}
        data-user={user}
        data-slug-hash={hash}
        data-editable={editable}
        data-preview={preview}
        style={{ width }}
      >
        See the Pen <a href={PenLink}>{title || ''}</a> by {user} (<a href={UserLink}>@{user}</a>) on <a href='https://codepen.io'>CodePen</a>.
      </p>
    )
  }
}

CodePen.propTypes = {
  type: PropTypes.oneOf(['iframe', 'embed']),
  user: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  theme: PropTypes.string,
  editable: PropTypes.bool,
  preview: PropTypes.bool,
  tab: PropTypes.oneOf(['html,result', 'css,result', 'js,result', 'result'])
}

CodePen.defaultProps = {
  type: 'iframe',
  width: '100%',
  height: '400',
  theme: 'light', 
  editable: true,
  preview: false,
  tab: 'result'
}

export default CodePen
