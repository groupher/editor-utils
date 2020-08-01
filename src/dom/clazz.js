/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

const isClassListValid = "classList" in document.documentElement;

const classReg = (className) => {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
};

const hasClass = (elem, c) => {
  return isClassListValid
    ? elem.classList.contains(c)
    : classReg(c).test(elem.className);
};

const addClass = (elem, c) => {
  if (isClassListValid) {
    elem.classList.add(c);
  } else {
    if (!hasClass(elem, c)) {
      elem.className = elem.className + " " + c;
    }
  }
};

const removeClass = (elem, c) => {
  if (isClassListValid) {
    elem.classList.remove(c);
  } else {
    elem.className = elem.className.replace(classReg(c), " ");
  }
};

const toggleClass = (elem, c, condition) => {
  let fn;
  if (condition !== undefined) {
    fn = condition ? addClass : removeClass;
  } else {
    fn = hasClass(elem, c) ? removeClass : addClass;
  }

  fn(elem, c);
};

const clazz = {
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass,
};

export default clazz;
