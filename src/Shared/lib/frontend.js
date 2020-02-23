
// Utils
import { isDefined, isBrowser } from './is'
import { forEach } from './object'


export function animateScrollTop() {
  if (isBrowser()) {
    if (window.scrollY !== 0) {
      setTimeout(() => {
        window.scrollTo(0, window.scrollY - 1000)

        animateScrollTop()
      }, 50)
    }
  }
}

export function attrs(props) {
  const newProps = {}

  forEach(props, prop => {
    if (prop) {
      newProps[prop] = props[prop]
    }
  })

  return newProps
}

export function cx(...classes) {
  return classes.join(' ').trim()
}

export function getFirstParagraph(html, url, getJustTheImage) {
  const paragraphs = html.split(/<p[^>]*>(.*?)<\/p>/).filter(paragraph => paragraph.length > 5)
  const image = paragraphs && paragraphs.length > 0
    ? paragraphs[0]
    : false
  // const firstParagraph = paragraphs && paragraphs.length > 1
  //   ? paragraphs[1]
  //   : false
  const imgRegex = /<img[^>]+src="(.+)"/g
  const img = imgRegex.exec(image)
  const src = img === null ? '' : img[1].split('"')[0]

  if (image && getJustTheImage) {
    return src
  }

  return ''
}

export function getPostImage(html) {
  return getFirstParagraph(html, '', true)
}

export function getNewState(state, newState) {
  return Object.assign({}, state, newState)
}

export function getScrollTop() {
  if (isBrowser()) {
    return isDefined(window.pageYOffset)
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body).scrollTop
  }

  return false
}



export function isFirstRender(items) {
  return !isDefined(items) || items.length === 0 || Object.keys(items).length === 0
}

export function isNotEmpty(props, obj) {
  let isEmpty = false

  props.forEach(prop => {
    if (!obj.hasOwnProperty(prop)) {
      isEmpty = true
    }
  })

  return !isEmpty
}

export function isUser(connectedUser, userPrivilege) {
  if (!isDefined(connectedUser)) {
    return false
  }

  const { username = false, privilege = false } = connectedUser

  if (userPrivilege) {
    return privilege === userPrivilege
  }

  return !!username
}

export function loadImage(imagePath) {
  return `/frontend/images/${imagePath}`
}

export function redirectTo(url = '/') {
  if (isBrowser()) {
    window.location.href = url
  }

  return false
}

export function setClass(condition, className1, className2) {
  return condition ? className1 : className2 || ''
}


export function isSinglePost(params) {
  const { year, month, day, slug } = params

  return year && month && day && slug
}



export function isGod(user) {
  return user && user.privilege === 'god'
}

export function isOwner(user, userId) {
  return user && user.id === userId
}

export function handleInputChanged({ target: { name, value } }, state) {
  return {
    ...state,
    form: {
      ...state.form,
      [name]: value
    }
  }
}
