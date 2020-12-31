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

const hasClass = (elem, className) => {
  return isClassListValid
    ? elem.classList.contains(className)
    : classReg(className).test(elem.className);
};

const addClass = (elem, className) => {
  if (className.trim().length === 0) return;

  if (isClassListValid) {
    elem.classList.add(className);
  } else {
    if (!hasClass(elem, className)) {
      elem.className = elem.className + " " + className;
    }
  }
};

const removeClass = (elem, className) => {
  if (className.trim().length === 0) return;

  if (isClassListValid) {
    elem.classList.remove(className);
  } else {
    elem.className = elem.className.replace(classReg(className), " ");
  }
};

const toggleClass = (elem, className, condition) => {
  if (className.trim().length === 0) return;

  let fn;
  if (condition !== undefined) {
    fn = condition ? addClass : removeClass;
  } else {
    fn = hasClass(elem, className) ? removeClass : addClass;
  }

  fn(elem, className);
};

const clazz = {
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass,
};

export default clazz;
