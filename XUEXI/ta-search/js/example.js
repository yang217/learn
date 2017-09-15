var moment = rome.moment;

rome(left, {
  time: false,
  dateValidator: rome.val.beforeEq(right)
});

rome(right, {
  time: false,
  dateValidator: rome.val.afterEq(left)
});

rome(leftInline, {
  time: false,
  dateValidator: rome.val.beforeEq(rightInline)
});

rome(rightInline, {
  time: false,
  dateValidator: rome.val.afterEq(leftInline)
});

rome(exa, {
  dateValidator: rome.val.except('2014-08-01')
});

rome(exb, {
  dateValidator: rome.val.except('2014-08-02', '2014-08-06')
});

rome(exc, {
  dateValidator: rome.val.except(['2014-08-04', '2014-08-09'])
});

rome(exd, {
  dateValidator: rome.val.except([['2014-08-03', '2014-08-07'], '2014-08-15'])
});

rome(exe, {
  dateValidator: rome.val.only([
    ['2014-08-01', '2014-08-15'], '2014-08-22'
  ])
});

rome(exf, {
  dateValidator: rome.val.except([exb, exd, '2014-08-15'])
});
