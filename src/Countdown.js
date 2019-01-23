import React, {Component} from 'react';

class Countdown extends Component {
    constructor(props){
        super(props);
        var countTime=new Date();
        countTime.setHours(17);
        countTime.setMinutes(30);
        countTime.setSeconds(0);
        countTime.setMilliseconds(0);
        this.state = {
            dateStamp:new Date().getTime(),
            hour: 17-new Date().getHours(),
            mimute:29-new Date().getMinutes(),
            second:60-new Date().getSeconds(),
            countTimeStamp:countTime.getTime(),
            isOvertime:false,
        };
}
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        var leadTime=this.state.countTimeStamp-this.state.dateStamp;
        console.log(leadTime)
        if(leadTime>=0){
            this.setState({
                dateStamp:new Date().getTime(),
                hour:Math.floor(leadTime/1000/60/60%24),
                mimute:Math.floor(leadTime/1000/60%60),
                second: Math.floor(leadTime/1000%60),
        })
        }else{
            leadTime=-leadTime;
            this.setState({
                isOvertime:true,
                dateStamp:new Date().getTime(),
                hour:Math.floor(leadTime/1000/60/60%24),
                mimute:Math.floor(leadTime/1000/60%60),
                second: Math.floor(leadTime/1000%60)+1,
            })
        }
  /*      this.setState({
            date:new Date().getTime(),
            hour: 17-new Date().getHours(),
            mimute:29-new Date().getMinutes(),
            second:60-new Date().getSeconds(),
        });*/
    }
    render() {
        console.log(new Date())
        const isWork=this.state.isOvertime;
             if(!isWork){
                 return(
                 <div>
                     倒计时：{this.state.hour}小时{this.state.mimute}分{this.state.second}秒
                 </div>
                 )
             }else{
                 return(
                     <div>
                         已经下班了，正在加班！
                         <p>加班时长：{this.state.hour}小时{this.state.mimute}分{this.state.second}秒</p>
                     </div>

                 )

             }

    }
}

export default Countdown;
