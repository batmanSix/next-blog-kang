interface Nav {
  href?: string,
  title?: string
}

const navLink: Nav[] = [
  { href: '/', title: '首页' },
  { href: '/blog', title: '博客' },
  { href: '/snippets', title: '片段' },
  { href: '/projects', title: '项目' },
  { href: '/about', title: '关于我' },
  { href: '/guestbook', title: '留言簿' },
]

export default navLink
