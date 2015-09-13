###### item
name | kind| price | brief | store
-----|----|-----|-------|--------
烙铁|仪器|20|最基础的工具，新手工程师家中常备|德律商店
低端示波器|仪器|500|低端调试仪器，可以增加少许的调试速度|德律商店
中端示波器|仪器|1000|中端调试仪器，可以增加一定的调试速度|德律商店
高端示波器|仪器|2000|高端调试仪器，可以增加大量的调试速度|德律商店
机械基础工具|仪器|200|最基础的机械工具套装|德律商店
低端单片机|IC|3|性能很弱的单片机，可以用于制作简陋的电路系统|德律商店
中端单片机|IC|15|性能一般的单片机，可以用于制作一般的电路系统|德律商店
高端单片机|IC|50|性能强劲的单片机，可以用于制作复杂的电路系统|德律商店
五5伍|IC|2|常用数字芯片，用于产生基础的数字信号|德律商店
锁存器|IC|2|郭天祥最喜欢的芯片|德律商店
FPGA|IC|30|高级可编程数字芯片，常被单片机奴役，可用于制作单片机|德律商店
CPLD|IC|15|廉价可编程数字芯片|德律商店
普通电池|基础器件|2|给电路板供电用的一次性器件|德律商店
锂电池|基础器件|30|给电路板供电用的器件，可重复使用|德律商店
电路基础元件|基础器件|10|最基础的电路元件套装，包括焊锡、排针、杜邦线、电阻、电容等器件|德律商店
LED|基础器件|1|电子设计基础材料，用于进行焊接|德律商店
数码管|基础器件|10|可以显示出数字或字幕的元件，常用作显示设备|德律商店
舵机|机械|30|机电的基础元件，通过输入占空比进行转动|德律商店
振动电机|机械|5|可以让系统产生震动的电机|德律商店
机械元件|机械|10|机械设备的基础单位|五金店
电钻|仪器|200|基础机械工具，用于打孔|五金店
电锯|仪器|300|基础机械工具，用于切割，噪音较大|五金店
浪神炮伪|伪神器|5000|浪神用过的武器的仿制版，毁灭比赛中的一个队伍|浪神殿
浪神炮|神器|10000|浪神用过的武器，毁灭比赛中所有其他队伍|浪神殿
浪经|神器|2000|浪神说过的话语，阅读后可提高一定的知识属性（数字、模拟）|浪神殿
浪布丁|神器|2000|浪神制作的布丁，随机技能等级提升1|浪神殿
浪手帕|神器|6000|浪神偶然得到的手帕，100%成功率招募本级同学或高一级的学长作为队友|浪神殿
浪粉丝芳心|伪神器|10000|浪神粉丝的芳心，使用后效率降低50%|浪神殿


###### combine
name | material| instrument | date 
-----|----|-----|-----
单片机流水灯|低端单片机*1+LED*8+电路基础元件*1|烙铁|10
单片机闹钟|低端单片机*1+数码管*8+电路基础元件*1|烙铁|9
女朋友（残、伪）| 机械元件*10+舵机*8+高端单片机*2|烙铁+电钻+电锯+机械基础工具|30
男朋友（残、伪）|机械元件*2+振动电机*1+普通电池*1|烙铁+电锯+机械基础工具|25

###### course
name |week|even_odd|    index|term
-----|----|--------|---------|----
微积分1|1-18|both    |1-上午,5-上午|1
新生教育课|1-15|even    |1-下午|1
线性代数|1-18|both    |2-上午,3-下午|1
C语言|1-18|even    |2-下午|1
中国近代史纲要|1-18|odd    |2-下午|1
高级英语听说|1-18|both    |3-上午|1
现代工程设计制图|1-18|both    |4-上午|1
形式与政策|11-18|both    |4-下午|1
军事理论|1-10|both    |4-下午|1
大学体育1|1-18|both    |5-下午|1

###### skill
name|pre|upgrade|des
----|---|-------|---
论文|none|1,1,1,2,3,5,7|使用文字与图片解释你的作品
PPT|论文|1,1,1,2,3,5,7|使用文字与图片与效果展示你的作品或想法
演讲|PPT|1,1,1,2,3,5,7,11,13|使用口才与PPT结合来展示你的作品或想法
传销|演讲|1,1,1,2,3,5,7,11,13|使用口才与其他资料影响别人的想法
线性代数|none|1,1,1,2,2,3|基础数学技能，矩阵处理相关
微积分|none|1,1,1,2,2,3|基础数学技能，数据处理相关
电路分析|none|1,1,1,2,2,3|基础电子技能，用于对电路进行简单分析
C语言|none|1,1,1,2,2,3|基础编程技能，单片机编程必备
信号与系统|线性代数,微积分|1,2,3,4,5,6,7|通信相关核心技能，用于对信号进行简单分析
模拟电路|微积分,电路分析|1,2,3,4,5,6,7,8,9|中级电子技能，电子设计核心技能，用于分析与设计三极管与MOS管相关电路
数字电路|电路分析,C语言|1,2,3,4,5,6,7,8,9|中级电子技能，电子设计核心技能，用于分析与设计数字芯片相关电路
单片机原理|电路分析,C语言|1,1,2,2,3,3|中高级电子技能，嵌入式的重要基础，用于理解单片机的原理
算法与数据结构|C语言|1,1,2,2,3,3|中级编程技能，笔试面试的重要部分，用于组织数据，减少计算所需空间与时间
其他语言|C语言|1,1,2,2,3,3,3,3,3|中高级编程技能，常用于APP与web编程
数字信号处理|信号与系统|1,3,3,5,5,5|通信相关核心技能，用于处理数字信号
电磁场与电磁波|信号与系统,模拟电路|3,3,4,4,5,6,7,8,9|高级电子技能，用于分析电磁波
开关电源|模拟电路|3,3,4,4,5,6,7,8,9,10,11|高级电子技能，用于制作开关电源
接口技术|数字电路|1,2,3,4,4,4,4|嵌入式相关核心技能，用于编写单片机片上外设与板上外设的驱动
自动控制|数据结构与算法|1,1,2,2,3,3,5,7,9|用于优化设备的控制算法
上位机软件|数据结构与算法|1,1,2,2,3,3,4,5,6|用于对设备进行分析与控制
图像识别|数字信号处理|2,2,3,3,5,7,9|高级数学技能，用于识别图像
射频电路|电磁场与电磁波|3,3,4,4,5,6,7,8,9|高级电子技能，用于分析与设计射频电路
FPGA与CPLD|接口技术|1,1,2,3,5,7,9|高级嵌入式技能，用于设计数字可编程电路与仿真ASIC
嵌入式|接口技术,单片机原理,数据结构|1,2,3,4,5,6,7,8|高级技能，用于设计嵌入式相关电路与软件

##计划
技能学习计划
制作计划
膜拜计划

##歌曲
感动 Here with me
欢快
生气
悬疑
##剧情设计








