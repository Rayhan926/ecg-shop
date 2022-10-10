import classNames from 'classnames';

export const cx = classNames;

const scrollTo = (id: string) => {
  const dom = document.getElementById(id);
  if (!dom) return;

  const offsetTop = dom.offsetTop;

  console.log(offsetTop);
};
