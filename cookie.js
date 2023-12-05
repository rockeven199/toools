// document.cookie = "username=John Doe,password=0000; expires=Thu, 18 Dec 2043 12:00:00 GMT";
(() => {
  __$ = window;
  __d = document;

  /**
   *
   * @param {*} JSONBody
   * @param {*} ExpiresTime
   * @returns cookie
   */
  function doingCookie(JSONBody, ExpiresTime) {
    let __setUpVariable = (__JSONBody) => {
      return JSON.stringify(__JSONBody)
        .replace(/[{}"]/g, "")
        .replace(/[:]/g, "=");
    };

    let __setUpExpires = (__ExpiresTime) => {
      let __temp = __ExpiresTime.split(",");
      __temp[0] = __temp[0].split("/");
      __temp[1] = __temp[1].split(".");

      const __month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const __week = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];

      for (let _a = 0; _a < __month.length; _a++) {
        _a == __temp[0][1] - 1 ? (__temp[0][1] = __month[_a]) : "";
      }

      let ___week;

      for (let _b = 0; _b < __week.length; _b++) {
        if (_b == __temp[0][2] - 1) {
          ___week = __week[_b];
        }
      }

      return `${___week}, ${__temp[0][2]} ${__temp[0][1]} ${__temp[0][0]} ${__temp[1][0]}:${__temp[1][1]}:${__temp[1][2]} GMT`;
    };

    let __data = __setUpVariable(JSONBody);
    let __expires = __setUpExpires(ExpiresTime);
    __d.cookie = `${__data}; expires=${__expires}`;
  }

  doingCookie({ username: 1213123 }, "2024/1/6,11.22.12");
})();
