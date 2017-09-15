//下面这个函数可以辅助向现有的URL的末尾添加查询字符串参数：

function addURLParam(url, name, value){
  url += (url.indexOf('?') == -1) ? '?' : '&';
  url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
   return url;
}
//可以判断到达底端了
scrollTop()>=$(document).height()-$(window).height()  