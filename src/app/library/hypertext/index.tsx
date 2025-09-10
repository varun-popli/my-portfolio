type PropTypes = {
  cclass?: string,
  children: React.ReactNode | null,
  href: string,
  title?: string
}

const Hypertext = (props: PropTypes) => {
  const {
    cclass,
    children,
    href,
    title,
  } = props;

  let customClass = "inline-flex items-baseline font-medium text-slate-200 hover:text-rose-400 focus-visible:text-rose-400".split(" ");
  if (cclass) {
    customClass = customClass.concat(cclass);
  }

  return (
    <a
      className={customClass.join(" ")}
      href={href}
      target="_blank"
      title={title}>
      {children}
    </a>
  )
};

export default Hypertext;