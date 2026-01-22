//[Script]
http-response ^https:\/\/hd\.opposhop\.cn\/api\/cn\/oapi\/.* script-path=oppo_cookie.js, requires-body=false

// oppo_cookie.js
const token = $request.headers["constToken"];
if (token) {
  $persistentStore.write(token, "oppo_constToken");
  $notification.post("OPPO 商城", "", "constToken 获取成功");
}
$done({});