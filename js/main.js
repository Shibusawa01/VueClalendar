new Vue({
  el: '#app',
  data: {
      weeks: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      calData: {year: 0, month: 0}
  },
  created: function (){
      let date = new Date();
      this.calData.year = date.getFullYear();
      this.calData.month = date.getMonth() + 1;
  },
  methods: {
      getMonthName: function(month) {
          let monthName = ['January','February','March','April','May','June','July','August','September','October','November','December'];
          return monthName[month - 1];
      },
      //<で先月に戻るnew Vue({
    el: '#app',
    data: {
        weeks: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        calData: { year: 0, month: 0 }
    },
    created: function () {
        let date = new Date();
        this.calData.year = date.getFullYear();
        this.calData.month = date.getMonth() + 1;
    },
    methods: {
        getMonthName: function (month) {
            let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return monthName[month - 1];
        },
        //<で先月に戻る
        moveLastMonth: function () {
            if (this.calData.month == 1) {
                this.calData.year--;
                this.calData.month = 12;
            }
            else {
                this.calData.month--;
            }
        },
        //>で次の月に進む
        moveNextMonth: function () {
            if (this.calData.month == 12) {
                this.calData.year++;
                this.calData.month = 1;
            }
            else {
                this.calData.month++;
            }
        }
    },
    computed: {
        calendar: function () {
            // 1日の曜日
            let firstDay = new Date(this.calData.year, this.calData.month - 1, 1).getDay();
            // 末日の日にち
            let lastDate = new Date(this.calData.year, this.calData.month, 0).getDate();
            // 日にちのカウント
            let dayIdx = 1;

            let calendar = [];
            //カレンダーの一行
            for (let w = 0; w < 6; w++) {
                let week = [];
                // 空白行をなくすため
                if (lastDate < dayIdx) { break; }
                //一行に何日分表示するか
                for (let d = 0; d < 7; d++) {
                    if (w == 0 && d < firstDay) {
                        //カレンダーの一行目の処理
                        week[d] = { day: '' };
                    } else if (w == 6 && lastDate < day) {
                        //カレンダーの最終行の処理
                        week[d] = { day: '' };
                        dayIdx++;
                    } else if (lastDate < dayIdx) {
                        //カレンダー最終行の空白を埋め
                        week[d] = { day: '' };
                        dayIdx++;
                    } else {
                        //1日から最終日までを表示
                        week[d] = { day: dayIdx };
                        dayIdx++;
                    }
                }

                calendar.push(week);
            }
            return calendar;
        }
    }
});
      moveLastMonth: function() {
          if (this.calData.month == 1) {
              this.calData.year--;
              this.calData.month = 12;
          }
          else {
              this.calData.month--;
          }
      },
      //>で次の月に進む
      moveNextMonth: function() {
          if (this.calData.month == 12) {
              this.calData.year++;
              this.calData.month = 1;
          }
          else {
              this.calData.month++;
          }
      }
  },
  computed: {
      calendar: function () {
          // 1日の曜日
          let firstDay = new Date(this.calData.year, this.calData.month - 1, 1).getDay();
          // 末日の日にち
          let lastDate = new Date(this.calData.year, this.calData.month, 0).getDate();
          // 日にちのカウント
          let dayIdx = 1;

          let calendar = [];
          //カレンダーの一行
          for (let w = 0; w < 6; w++) {
              let week = [];

              // 空白行をなくすため
              if (lastDate < dayIdx) {break;}
              //一行に何日分表示するか
              for (let d = 0; d < 7; d++) {
                  if (w == 0 && d < firstDay) {
                      //カレンダーの一行目の処理
                      week[d] = {day: ''};
                  } else if (w == 6 && lastDate < day) {
                      //カレンダーの最終行の処理
                      week[d] = {day: ''};
                      dayIdx++;
                  } else if (lastDate < dayIdx) {
                      //カレンダー最終行の空白を埋め
                      week[d] = {day: ''};
                      dayIdx++;
                  } else {
                      //1日から最終日までを表示
                      week[d] = {day: dayIdx};
                      dayIdx++;
                  }
              }

              calendar.push(week);
          }
          return calendar;
      }
  }
});
