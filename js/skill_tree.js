//skill_tree=new SKILL_TREE_OBJ();
angular.module('home_app')
    .controller("tab_skill_controller", function ($scope) {
        //        skill_tree={}
        var variableIsSite = 1;
        var talent = new Array();
        var rank = new Array();
        var tree = new Array();
        var nltree = new Array();
        var nltalent = new Array();
        var rankBottom = new Array();
        var minLevel = new Array();
        var hasDependentTalents = new Array();
        var treeStartStop = new Array();
        var rankTop = new Array();
        var pointsTree = new Array();
        var maxTierArray = new Array();
        maxTierArray[0] = 1;
        maxTierArray[1] = 1;
        maxTierArray[2] = 1;

        var template = new Array();

        var levelMax = 70;
        var levelMin = 10;
        var tierNum = 4;

        var levelCurrent = levelMax;

        var theRequiredLevel = levelMin - 1;
        //needed for ajax script loading









        var i = 0;
        var t = 0;
        var nlclass = "mage";
        var nlclassPatch = "mage";

        nltree[i] = "Arcane";
        i++;
        nltree[i] = "Fire";
        i++;
        nltree[i] = "Frost";
        i++;

        i = 0;

        nltalent[i] = ["Mind Mastery"];
        i++;
        nltalent[i] = ["Magic Absorption"];
        i++;
        nltalent[i] = ["Spell Impact"];
        i++;
        nltalent[i] = ["Arcane Subtlety"];
        i++;
        nltalent[i] = ["Focus Magic"];
        i++;
        nltalent[i] = ["Arcane Concentration"];
        i++;
        nltalent[i] = ["Magic Attunement"];
        i++;
        nltalent[i] = ["Critical Mass"];
        i++; //模电
        nltalent[i] = ["Spell Power"];
        i++;
        nltalent[i] = ["Fire Power"];
        i++;
        nltalent[i] = ["Presence of Mind"];
        i++; //数据
        nltalent[i] = ["Burnout"];
        i++;
        nltalent[i] = ["Arcane Flows"];
        i++; //DSP
        nltalent[i] = ["Arcane Power"];
        i++;
        nltalent[i] = ["Missile Barrage"];
        i++; //开关
        nltalent[i] = ["Arctic Reach"];
        i++;
        nltalent[i] = ["Arcane Potency"];
        i++;
        nltalent[i] = ["Prismatic Cloak"];
        i++;
        nltalent[i] = ["Arcane Meditation"];
        i++;
        nltalent[i] = ["Arcane Mind"];
        i++;
        nltalent[i] = ["Arcane Empowerment"];
        i++;
        nltalent[i] = ["Arcane Power"];
        i++;
        nltalent[i] = ["Incanter's Absorption"];
        i++;
        nltalent[i] = ["Arcane Flows"];
        i++;
        nltalent[i] = ["Mind Mastery"];
        i++;
        nltalent[i] = ["Slow"];
        i++;
        nltalent[i] = ["Missile Barrage"];
        i++;
        nltalent[i] = ["Netherwind Presence"];
        i++;
        nltalent[i] = ["Spell Power"];
        i++;
        nltalent[i] = ["Arcane Barrage"];
        i++;



        //needed for ajax script loading









        var colorGreen = "#1AFF1A";
        var colorYellow = "#000000";
        var colorWhite = "#FFFFFF";


        var ness_mia = 0;





        function getMaxTier(theTree) {
            var maxTier = 0;
            for (var loopMaxTier = 0; loopMaxTier < tierNum; loopMaxTier++) {
                if (pointsTier[theTree][loopMaxTier] != 0)
                    maxTier = loopMaxTier;
            }
            maxTier++;
            return maxTier;
        }

        function getPointsAboveAndCurrent(theTree, maxTier) {
            var pointsTierTotalAboveAndCurrent = 0;
            var loopPointsTierAbove = 0;
            for (loopPointsTierAbove; loopPointsTierAbove < maxTier; loopPointsTierAbove++) {
                pointsTierTotalAboveAndCurrent += pointsTier[theTree][loopPointsTierAbove];
            }
            return pointsTierTotalAboveAndCurrent;
        }

        function canUnlearn(talentID, clickLeftRight, maxTier) { //or can learn
            //            var treeID = talent[talentID][0];
            var maxRank = talent[talentID][2];
            //            var treePoints = pointsTree[treeID];
            //            var pointsAboveAndCurrent;
            // if (hasDependentTalentWithPoints(talentID))
            // {
            //   console.log("hddd")
            //     return false;
            // }
            if (clickLeftRight == 0) { //left click
                var theCurrentRank = rankTop[talentID][0];
                if (theCurrentRank < maxRank) {
                    if (v.state.skill_point == 0)
                        return false;
                    if (!checkRequiredTalent(talentID) && theCurrentRank == 0)
                        return false;
                    //                    pointsAboveAndCurrent++;
                } else {
                    return false;
                }
            }
            //            else { //right click
            //                if (rankTop[talentID][0] != 0) {
            //                    pointsAboveAndCurrent = getPointsAboveAndCurrent(treeID, maxTier - 1);
            //                } else { //if the rank is 0
            //                    return false;
            //                }
            //            }
            return true;
        }

        function getTalentID(talentName) {
            var theTalentID;
            for (theTalentID = 0; talent[theTalentID]; theTalentID++) {
                if (talent[theTalentID][1] == talentName)
                    return theTalentID;
            }
        }

        function getMinLevel(talentID) {
            return ((talent[talentID][4] - 1) * ness_mia + 10);
        }

        function hasDependentTalentWithPoints(talentID) {

            var loopStart;
            var loopStop;
            var theTree = talent[talentID][0];

            if (talentID != 0)
                loopStart = talentID - 1;
            else
                loopStart = talentID;
            loopStop = treeStartStop[theTree];

            while (loopStart <= loopStop) {
                if (talent[loopStart][5] && talent[loopStart][5][0] == talentID && rankTop[loopStart][0] != 0)
                    return true;
                loopStart++;
            }
            return false;

        }

        function canTurnGreen(totalPoints, tree, oldMaxTier) {
            var i;
            var necessaryPoints;
            var iStop;
            var thisTier;

            if (tree == 0)
                i = 0;
            else
                i = treeStartStop[tree - 1] + 1;

            iStop = treeStartStop[tree];

            while (i <= iStop) {
                // thisTier = talent[i][4];

                // necessaryPoints = (thisTier - 1) * ness_mia;


                var noRequirement = checkRequiredTalent(i); // if finish required

                var theCurrentRank = rankTop[i][0];
                var theMaxRank = talent[i][2];


                if (talent[i][5]) {
                    var reqTalent = talent[i][5]
                    var index = 0;
                    while (reqTalent[index * 2] != undefined) {
                        var reqTalentID = reqTalent[index * 2];
                        var reqTalentPoints = reqTalent[index * 2 + 1];
                        if (rankTop[reqTalentID][0] >= reqTalentPoints) {
                            //console.log("i="+i+"mid_from"+reqTalentID)
                            $("[green_mid_to=" + i + "][green_mid_from=" + reqTalentID + "]").css("visibility", "visible")
                        }
                        index++;
                    }
                }
                if (theCurrentRank != theMaxRank && noRequirement) {

                    document.getElementById("modifyRankTopColor" + i).style.color = colorGreen;
                    document.getElementById("modifyRankTop" + i).style.color = colorGreen;


                    //                if (canUnlearn(i, 0, oldMaxTier)) {
                    //                    if (talent[i][5]) {
                    //                        //document.getElementById("arrowGreen" + i).style.visibility = "visible";
                    //                        // $("[mid_to=" + i + "]").css("visibility", "visible")
                    //                        // console.log($("[mid=" + i + "]"))
                    //                        // console.log("gree")
                    //                    }
                    //
                    //                }

                } else if (theCurrentRank == theMaxRank) { // to Yellow
                    document.getElementById("modifyRankTopColor" + i).style.color = colorYellow;
                    document.getElementById("modifyRankTop" + i).style.color = colorYellow;
                    //document.getElementById("arrowYellow" + i).style.visibility = "hidden";
                    $("[yellow_mid_from=" + i + "]").css("visibility", "visible")
                    $("[green_mid_from=" + i + "]").css("visibility", "hidden")
                        //                    console.log("max")

                } else if (theCurrentRank > 0) { // to green
                    document.getElementById("modifyRankTopColor" + i).style.color = colorGreen;
                    document.getElementById("modifyRankTop" + i).style.color = colorGreen;
                    document.getElementById("iconOverGreen" + i).style.visibility = "visible";


                } else { // to white
                    document.getElementById("modifyRankTopColor" + i).style.color = colorWhite;
                    document.getElementById("modifyRankTop" + i).style.color = colorWhite;

                    document.getElementById("iconOverGreen" + i).style.visibility = "hidden";

                    if (talent[i][5])
                        document.getElementById("arrowGreen" + i).style.visibility = "hidden";

                }

                i++;
            }

            i = 0;
            if (v.state.skill_point == 0) {
                while (talent[i]) {
                    if (rankTop[i][0] == 0) {
                        document.getElementById("modifyRankTopColor" + i).style.color = colorWhite;
                        document.getElementById("modifyRankTop" + i).style.color = colorWhite;
                        document.getElementById("iconOverGreen" + i).style.visibility = "hidden";
                    }
                    i++;
                }
            }

        }

        function checkRequiredTalent(talentID) {

            var reqTalent;
            if (reqTalent = talent[talentID][5]) {
                var index = 0;
                while (reqTalent[index * 2] != undefined) {
                    reqTalentID = reqTalent[index * 2];
                    reqTalentPoints = reqTalent[index * 2 + 1];
                    if (rankTop[reqTalentID][0] < reqTalentPoints)
                        return false;
                    index++;
                }

            }
            return true;
        }

        $scope.rankTopOnClick = function (talentID) {
//            console.info(rankTop);
            var theTree = talent[talentID][0];

            //  var oldMaxTier = getMaxTier(theTree);
            var oldMaxTier = maxTierArray[theTree];

            if (!canUnlearn(talentID, 0, oldMaxTier))
                return;

            var maxRank = talent[talentID][2]; //maximum rank possible  
            var theTier = talent[talentID][4];
            var theTierIndex = theTier - 1;

            var rankString = rankTop[talentID][1];

            var theCurrentRank = rankTop[talentID][0];
            //            console.log(rankTop);
            if (theCurrentRank < maxRank) { //see if you hit max rank
                rankTop[talentID][1] = rank[talentID][theCurrentRank];
                rankTop[talentID][0] ++; //if you haven't hit max rank, increment
                theUpdatedRank = rankTop[talentID][0];
                //                rankTop[talentID][2] = rank[talentID][theUpdatedRank];
                v.state.skill_point--;
                if (theUpdatedRank != maxRank) {
                    // rankString = rankTop[talentID][1] + '<br><br><font color = "ffffff">' + textNextRank + '</font><br>' + rankTop[talentID][2];
                    rankString = rankTop[talentID][1] + rankTop[talentID][2];

                    document.getElementById('iconOverGreen' + talentID).style.visibility = "visible";
                } else {
                    rankString = rankTop[talentID][1];
                    document.getElementById('iconOverYellow' + talentID).style.visibility = "visible";
                }
                if (talent[talentID][5])
                    pointsTree[theTree] ++;
                // document.getElementById("arrowYellow" + talentID).style.visibility = "visible";
                //keep track of points in the tier    

                pointsTier[theTree][theTierIndex] = pointsTier[theTree][theTierIndex] + 1;
            }

            if (theUpdatedRank == 1 && theTier > oldMaxTier)
                maxTierArray[theTree] = theTier;
            rankString = rank[talentID][0];
            document.getElementById("talentThumb" + talentID).style.visibility = "visible";

            // if (pointsTree[theTree] == 1)
            //     document.getElementById(tree[theTree] + 'tabPointsText').innerHTML = textPoint;
            // else
            //     document.getElementById(tree[theTree] + 'tabPointsText').innerHTML = textPoints;
            document.getElementById('modifyDescriptionTop' + talentID).innerHTML = rankString;
            document.getElementById('modifyRankTop' + talentID).innerHTML = rankTop[talentID][0];
            document.getElementById('modifyRankTopDescription' + talentID).innerHTML = rankTop[talentID][0];
            // document.getElementById('modifyv.state.skill_point').innerHTML = v.state.skill_pointMax - v.state.skill_point;
            // document.getElementById('levelRequired').innerHTML = v.state.skill_pointMax - v.state.skill_point + levelMin - 1;
            // document.getElementById(tree[theTree] + 'PointsTopRight').innerHTML = pointsTree[theTree];
            // document.getElementById('tabPointsAvailable').innerHTML = v.state.skill_point;
            // document.getElementById(tree[theTree] + 'tabPoints').innerHTML = pointsTree[theTree];
            canTurnGreen(pointsTree[theTree], theTree, oldMaxTier);
//            console.log(pointsTree[theTree], theTree, oldMaxTier)
//            console.log(v.state.skill_point)
            showTip(document.getElementById("armoryOver" + talentID).innerHTML);

        }
        $scope.skill_check=function(){
            for(var i=0;i<=23;i++)
            {
                canTurnGreen(i, 0, 1);
            }
        }
//        $scope.ttest=function(){
//            console.log("ddd")
//        }
        $scope.rankTopOnRightClick = function (talentID) {
            var theTree = talent[talentID][0];
            //  var oldMaxTier = getMaxTier(theTree);
            var oldMaxTier = maxTierArray[theTree];

//            if (!canUnlearn(talentID, 1, oldMaxTier))
//                return;

//            var maxRank = talent[talentID][2]; //maximum rank possible
            var theTier = talent[talentID][4];
            var theTierIndex = theTier - 1;
            var rankString = rankTop[talentID][1];

            if (rankTop[talentID][0] > 0) {

                rankTop[talentID][0] --;
                if (rankTop[talentID][0] - 1 != -1) {
                    rankTop[talentID][1] = rank[talentID][(rankTop[talentID][0] - 1)];
                    rankTop[talentID][2] = rank[talentID][(rankTop[talentID][0])];
                    // rankString = rankTop[talentID][1] + '<br><br><font color = "ffffff">' + textNextRank + '</font><br>' + rankTop[talentID][2];
                    rankString = rankTop[talentID][1] + rankTop[talentID][2];

                } else {
                    rankTop[talentID][1] = rank[talentID][rankTop[talentID][0]];
                    rankString = rankTop[talentID][1];
                }

                rankPoints++;

                //keep track of points in the tier    
                pointsTree[theTree] --;
                pointsTier[theTree][theTierIndex] --;

                document.getElementById('iconOverYellow' + talentID).style.visibility = "hidden";
                document.getElementById('iconOverGreen' + talentID).style.visibility = "visible";

                if (rankTop[talentID][0] == 0) {
                    document.getElementById('iconOverGreen' + talentID).style.visibility = "hidden";
                    document.getElementById('iconOverYellow' + talentID).style.visibility = "hidden";
                    document.getElementById("talentThumb" + talentID).style.visibility = "hidden";

                    if (talent[talentID][5])
                        document.getElementById("arrowYellow" + talentID).style.visibility = "hidden";

                    oldMaxTier = getMaxTier(theTree);
                    maxTierArray[theTree] = oldMaxTier;

                }

                if (rankPoints == 1) {
                    canTurnGreen(pointsTree[0], 0, maxTierArray[0]);
                    // canTurnGreen(pointsTree[1], 1, maxTierArray[1]);   
                    // canTurnGreen(pointsTree[2], 2, maxTierArray[2]);               
                }


            }

            if (pointsTree[theTree] == 1)
                document.getElementById(tree[theTree] + 'tabPointsText').innerHTML = textPoint;
            else
                document.getElementById(tree[theTree] + 'tabPointsText').innerHTML = textPoints;

            document.getElementById('modifyDescriptionTop' + talentID).innerHTML = rankString;

//            document.getElementById('modifyRankTop' + talentID).innerHTML = rankTop[talentID][0];
//            document.getElementById('modifyRankTopDescription' + talentID).innerHTML = rankTop[talentID][0];
            document.getElementById('modifyRankPoints').innerHTML = rankPointsMax - rankPoints;
            document.getElementById('levelRequired').innerHTML = rankPointsMax - rankPoints + levelMin - 1;
            document.getElementById(tree[theTree] + 'PointsTopRight').innerHTML = pointsTree[theTree];
            document.getElementById(tree[theTree] + 'tabPoints').innerHTML = pointsTree[theTree];
//            document.getElementById('tabPointsAvailable').innerHTML = rankPoints;
//            if (rankPoints != 1)
                canTurnGreen(pointsTree[theTree], theTree, oldMaxTier);

        }


        function showTip(data) {
            //        $(".my_skill_tree_panel_content").show();
            $("#my_skill_tree_panel_content").html(data);
        }

        function hideTip() {
            //        $(".my_skill_tree_panel_content").hide();
        }
        $scope.unhideTalent = function (input) {
            //        if (variableIsSite)
            //            document.getElementById("talentMouseOver" + input).style.visibility = "visible";
            //        else
            //            console.log("unhide")
            $scope.current_skill_index = input;
            $(".tdPaddingTen").css("background-color","")
            $("#talentMouseOver"+input).parent().css("background-color","steelblue")
            showTip(document.getElementById("armoryOver" + input).innerHTML);
        }

        $scope.hideTalent = function (input) {
            //        if (variableIsSite)
            //            document.getElementById("talentMouseOver" + input).style.visibility = "hidden";
            //        else
            hideTip();
        }


        //needed for ajax script loading=======









        var i = 0;
        var t = 0;

        var className = "法师天赋";
        var talentPath = "/info/talents/";

        tree[0] = "火焰";
        t = 0;

        talent[i] = [0, "论文", 2, 1, 1];
        i++;
        talent[i] = [0, "线性代数", 5, 3, 1];
        i++;
        talent[i] = [0, "微积分", 5, 4, 1];
        i++;
        talent[i] = [0, "电路分析", 5, 5, 1];
        i++;
        talent[i] = [0, "C语言", 5, 6, 1];
        i++;

        talent[i] = [0, "PPT", 5, 1, 2, [getTalentID("论文"), 1]];
        i++;
        talent[i] = [0, "信号与系统", 3, 3, 2, [getTalentID("线性代数"), 1, getTalentID("微积分"), 2]];
        i++;
        talent[i] = [0, "模拟电路", 3, 4, 2, [getTalentID("微积分"), 1, getTalentID("电路分析"), 1]];
        i++;
        talent[i] = [0, "数字电路", 3, 5, 2, [getTalentID("电路分析"), 1]];
        i++;
        talent[i] = [0, "单片机原理", 3, 6, 2, [getTalentID("C语言"), 1]];
        i++;
        talent[i] = [0, "算法与数据结构", 3, 7, 2, [getTalentID("C语言"), 1]];
        i++;

        talent[i] = [0, "演讲", 2, 1, 3, [getTalentID("PPT"), 1]];
        i++;
        talent[i] = [0, "数字信号处理", 3, 2, 3, [getTalentID("信号与系统"), 1]];
        i++;
        talent[i] = [0, "电磁场与电磁波", 3, 3, 3, [getTalentID("信号与系统"), 1]];
        i++;
        talent[i] = [0, "开关电源", 3, 4, 3, [getTalentID("模拟电路"), 1]];
        i++;
        talent[i] = [0, "接口技术", 3, 5, 3, [getTalentID("数字电路"), 1]];
        i++;
        talent[i] = [0, "自动控制", 3, 7, 3, [getTalentID("数据结构"), 1]];
        i++;
        talent[i] = [0, "其他语言", 3, 8, 3, [getTalentID("数据结构"), 1]];
        i++;

        talent[i] = [0, "传销", 3, 1, 4, [getTalentID("演讲"), 1]];
        i++;
        talent[i] = [0, "图像识别", 3, 2, 4, [getTalentID("数字信号处理"), 1]];
        i++;
        talent[i] = [0, "射频电路", 3, 3, 4, [getTalentID("电磁场与电磁波"), 1]];
        i++;
        talent[i] = [0, "FPGA与CPLD", 3, 5, 4, [getTalentID("接口技术"), 1]];
        i++;
        talent[i] = [0, "嵌入式", 3, 6, 4, [getTalentID("单片机原理"), 1, getTalentID("接口技术"), 1, getTalentID("自动控制"), 1]];
        i++;
        talent[i] = [0, "上位机软件", 3, 8, 4, [getTalentID("其他语言"), 1]];
        i++;
        
        treeStartStop[t] = i - 1;
        t++;

        i = 0;


        //FIRE TALENTS---------------------------------------------------
        rank=[]
       
        for(var j in talent)
        {
//            console.log(talent[j][1])
//            talent[j][2]=skills[talent[j][1]].upgrade.length;
            rank[j]=[]
            if(rank[j][0]=skills[talent[j][1]]){
                rank[j][0]=skills[talent[j][1]].des;
            }
            
//            skills[talent[j][1]].data=rankTop[j];
        }

        //思维冷却 Brain Freeze - Frost




        var lg = ""; // Example: /en

        var mia_path = "./res/skill_tree/"
        var pixelGif = mia_path + "pixel.gif";
        var textLevelRequired = "需要等级：";
        var textPointsLeft = "剩余点数：";
        var textPointsSpent = "花费点数：";
        var textPoint = "点";
        var textPoints = "点";
        var textColon = "：";
        var textLeftClick = "左键单击学习"
        var textRightClick = "右键单击取消"
        var textRankColon = "等级："

        var textNextRank = "下一等级";
        var requiresRequires = "需要";
        var requiresPointsIn = "点在";
        var requiresTalents = "天赋";
        stylesheetsRestored = false;

        // function getStringRequires(requirementPoints, requirementName) {
        //     theS = "";
        //     if (requirementPoints == 1)
        //         theS = "";
        //     var theString = ' 需要 ' + requirementPoints + ' 点 ' + theS + ' 在 ' + requirementName;
        //     return theString;
        // }

        // function getStringRequiresTalents(requirementPoints, requirementName) {
        //     var theString = ' 需要 ' + requirementPoints + ' 点在 ' + requirementName + ' 天赋 ';
        //     return theString
        // }

        function saveTheTemplate() {

            var templateString = "";
            for (i = 0; talent[i]; i++) {
                templateString = templateString + rankTop[i][0]
            }

            //    if (is_ie4up)
            //        var w = window.open("", "", "resizable=0,toolbar=1,width=850,height=155,status=1,scrollbars=1,menubar=1, screenX=100, screenY=100, left=100, top=100");
            //    else
            var w = window.open("", "", "resizable=0,toolbar=1,width=850,height=175,status=1,scrollbars=1,menubar=1, screenX=100, screenY=100, left=100, top=100");

            w.document.write("<html>");

            w.document.write('<body marginheight = 0 marginwidth = 0 topmargin = 0 leftmargin = 0 bgcolor = "#000000"><center><table cellspacing = "0" cellpadding = "0" border = "0" width = "100%"><tr><td><img src = "' + mia_path + '//top-left.gif"></td>');
            w.document.write('<td width = "100%" background = "' + mia_path + 'top.gif"></td><td><img src = "' + mia_path + 'top-right.gif"></td></tr>  <tr>');
            w.document.write('<td background = "' + mia_path + 'left.gif" valign = "top"><img src = "' + mia_path + '/pixel.gif" width = "10" height = "1"></td><td align="center" width = "100%"><table cellspacing = "0" cellpadding = "0" border = "0" width = "100%" style = "background-image: url(\'\'); background-repeat: repeat-y; background-position: right;">');
            w.document.write('<tr><td align = center><table cellspacing = "0" cellpadding = "0" border = "0"><tr><td>');

            w.document.write("<h3><span style = 'color: #ffffff;'>Saving the Template</span></h3>");
            w.document.write("<span style = 'font-family: tahoma, arial; font-size: 12px; color: #ffffff'><b>Copy the complete URL below:</b><br>");
            // w.document.write("http://www.wowchina.com/info/talents/"+ nlclass +".shtml?" +templateString);    

            w.document.write('</td></tr></table></td></tr></table></td><td background = "' + mia_path + 'right.gif" valign = "top"><img src = "' + mia_path + '/pixel.gif" width = "14" height = "145"></td></tr>');
            w.document.write('  <tr><td><img src = "' + mia_path + 'bot-left.gif"></td> <td width = "100%" background = "' + mia_path + 'bot.gif"></td>     <td width = "14"><img src = "' + mia_path + '/bot-right.gif"></td>    </tr>   </table>          ');
            w.document.write('</center></body></html>');


        }


        //needed for ajax script loading









        if (variableIsSite) query = window.location.search.substring(1);
        if (query.indexOf("tal=") > -1) query = query.slice(4)

        var vars = query;
        var saveTemplate = new Array();

        for (e = 0; e < vars.length; e++) {
            saveTemplate[e] = vars.charAt(e);
        }

        for (treeLoop = 0; treeLoop < tree.length; treeLoop++) {
            pointsTree[treeLoop] = 0;
        }

        var numberOfTrees = tree.length;

        var pointsTier = new Array(numberOfTrees);
        for (i = 0; i < numberOfTrees; i++) pointsTier[i] = new Array(tierNum);

        var tierLoop = 0;

        while (tierLoop < tierNum) {
            for (var treeLoop = 0; treeLoop < numberOfTrees; treeLoop++) {
                pointsTier[treeLoop][tierLoop] = 0;
            }
            tierLoop++;
        }

        tierLoop = 0;

        var talentInsertID = 0;

        //filling in new arrays:
        //minLevel array: minimum level required for the talent
        //rankBottom array: array used to display info about the ranks for the talents displayed at the bottom of the page

        //        if (false) {
        //            while (talent[talentInsertID]) {
        //                minLevel[talentInsertID] = getMinLevel(talentInsertID); //fill in the minLevel array
        //                rankBottom[talentInsertID] = [1, rank[talentInsertID][0]];
        //                talentValue = eval(saveTemplate[talentInsertID]);
        //                if (!talentValue) savedRank = 0;
        //                else savedRank = talentValue;
        //                savedRankCurrent = savedRank - 1;
        //                savedRankNext = savedRank + 1;
        //                if (savedRankCurrent < 0) savedRankCurrent = 0;
        //                if (talent[talentInsertID][2] != 1) rankTop[talentInsertID] = [savedRank, rank[talentInsertID][savedRankCurrent], rank[talentInsertID][savedRankNext]];
        //                else rankTop[talentInsertID] = [savedRank, rank[talentInsertID][0]];
        //                pointsInDaTree = talent[talentInsertID][0];
        //                pointsTree[pointsInDaTree] += savedRank;
        //                pointsTier[pointsInDaTree][talent[talentInsertID][4] - 1] += savedRank;
        //                v.state.skill_point -= savedRank;
        //                theRequiredLevel += savedRank;
        //                talentInsertID++;
        //            }
        //            var q = 0;
        //            while (q < talent.length) {
        //                hasDependentTalents[q] = 0;
        //                q++;
        //            }
        //            q = 0;
        //            while (q < talent.length) {
        //                if (talent[q][5]) hasDependentTalents[talent[q][5][0]] ++;
        //                q++;
        //            }
        //            maxTierArray[0] = getMaxTier(0);
        //            maxTierArray[1] = getMaxTier(1);
        //            maxTierArray[2] = getMaxTier(2);
        //        } else {
        while (talent[talentInsertID]) {
            minLevel[talentInsertID] = getMinLevel(talentInsertID); //fill in the minLevel array
            rankBottom[talentInsertID] = [1, rank[talentInsertID][0]];
            if (talent[talentInsertID][2] != 1) rankTop[talentInsertID] = [0, rank[talentInsertID][0], rank[talentInsertID][1]];
            else rankTop[talentInsertID] = [0, rank[talentInsertID][0]];
            talentInsertID++;
        }
        
        for(var j in talent)
        {
//            console.log(talent[j][1])
            if(talent[j][2]=skills[talent[j][1]])
            {
                talent[j][2]=skills[talent[j][1]].upgrade.length;
                skills[talent[j][1]].data=rankTop[j];
            }
            
//            rank[j][0]=skills[talent[j][1]].des;
//            console.log(skills[talent[j][1]].des)
            
        }
        
    
        var q = 0;
        while (q < talent.length) {
            hasDependentTalents[q] = 0;
            q++;
        }
        q = 0;
        while (q < talent.length) {
            if (talent[q][5])
                hasDependentTalents[talent[q][5][0]] ++;
            q++;
        }
        //        }
        //needed for ajax script loading
        //print out all the different types of talent trees
        var i = 0;

        var arrowYellowStyle = "hidden";
        var arrowGreenStyle = "hidden";
        var massiveReplaceString = "";

        var talentDescriptionArray = new Array;

        var imgDir = "";

        massiveReplaceString += '<div class="talentwrap1"><div class="talentwrap2"><table border = "0" cellpadding = "0" cellspacing = "0"><tr><td>';

        if (variableIsSite) {


            massiveReplaceString += '</tr></table></div></div>';
            iconSize = ' width = "43" height = "45"';
            resetDisplay = 'style = "display: block;"';
        } else {
            imgDir = "armory/";
            iconSize = ' width = "32" height = "34"';
            resetDisplay = 'style = "display: block;"';
        }

        massiveReplaceString += '</td></tr><tr>';

        //finally we get to arrange and print out all the info
        for (var printTreeID = 0; printTreeID < numberOfTrees; printTreeID++) {
            var tier = 0;
            var treeID;

            treeID = tree[printTreeID];

            var treeName = nltree[printTreeID];
            treeName = treeName.toLowerCase();
            treeName = treeName.replace(" ", "");

            //box top
            massiveReplaceString += '<td><table border = "0" cellpadding = "0" cellspacing = "0" style="zoom:130%;">';

            massiveReplaceString += '<tr><td class = "tabletopleft"></td>';
            massiveReplaceString += '<td class = "tabletop"></td>';
            massiveReplaceString += '<td class = "tabletopright"></td></tr>';

            massiveReplaceString += '<tr>';
            // massiveReplaceString += '<td style = "background: url(\''+ imgPath +'/'+ nlclass +'/images/'+ imgDir + treeName +'/background.jpg\') #000000 0 0 no-repeat; ">'; 
            massiveReplaceString += '<td  >';

            massiveReplaceString += '<div id = "' + treeID + 'Tree">';

            var vertical = tierNum;
            var verticalCounter;
            var horizontal = 8;
            var horizontalCounter;

            //begin while loop
            while (talent[i] && talent[i][0] == printTreeID && i != (talent.length - 1)) {

                //if (talent[i][0] == printTreeID)
                //{ 

                massiveReplaceString += '<table border = "0" cellspacing = "0" cellpadding = "0"><tr><td class = "treePadding">';
                massiveReplaceString += '<table border = "0" cellpadding = "10" cellspacing = "0">';

                for (verticalCounter = 1; verticalCounter <= vertical; verticalCounter++) {
                    massiveReplaceString += "<tr>";
                    for (horizontalCounter = 1; horizontalCounter <= horizontal; horizontalCounter++) {
                        massiveReplaceString += '<td class = "tdPaddingTen" id="tdPaddingTenout'+i+'">';
                        requirements = []
                        if (talent[i] && talent[i][3] == horizontalCounter && talent[i][4] == verticalCounter) {


                            var imageName;
                            talentName = talent[i][1];
                            imageName = nltalent[i][0];
                            imageName = imageName.toLowerCase();
                            imageName = imageName.replace(":", "");
                            imageName = imageName.replace(" ", "");
                            imageName = imageName.replace(" ", "");
                            imageName = imageName.replace(" ", "");
                            imageName = imageName.replace(" ", "");

                            massiveReplaceString += '<div id = "wrapper99"><div id = "rankTopStyle"><table><tr><td nowrap class = "tdPaddingThree">';
                            //rank
                            if (rankTop[i][0] == talent[i][2]) {

                                massiveReplaceString += '<span id = "modifyRankTopColor' + i + '" class = "mySmall2">';
                                massiveReplaceString += '<span id = "modifyRankTop' + i + '" class = "mySmall22">';
                            } else if (rankTop[i][0] > 0) {
                                massiveReplaceString += '<span id = "modifyRankTopColor' + i + '" class = "mySmallGreen">';
                                massiveReplaceString += '<span id = "modifyRankTop' + i + '" class = "mySmallGreen2">';
                            } else {
                                massiveReplaceString += '<span id = "modifyRankTopColor' + i + '" class = "mySmallOff">';
                                massiveReplaceString += '<span id = "modifyRankTop' + i + '" class = "mySmallOff2">';
                            }

                            massiveReplaceString += rankTop[i][0] + '</span>/' + talent[i][2] + '</span></td></tr></table></div></div>';

                            //description
                            massiveReplaceString += '<div class="skill_tree_panel" ' + '" id = "talentMouseOver' + i + '" style = "visibility: hidden;"><div id = "wrapper">';

                            tierTalent = talent[i][4];
                            // 
                            // 
                            // 
                            if (printTreeID != 2 && tierTalent != vertical) {
                                massiveReplaceString += '<div id = "descriptionTopStyle" style="">';
                            } else if (printTreeID == 2 && tierTalent != vertical) {
                                massiveReplaceString += '<div id = "descriptionTopStyle">';
                            } else if (printTreeID != 2 && tierTalent == vertical) {
                                massiveReplaceString += '<div id = "descriptionTopStyle">';
                            } else {
                                massiveReplaceString += '<div  id = "descriptionTopStyle">';
                            }

                            massiveReplaceString += '<table border = "0" cellpadding = "0" cellspacing = "0" ><tr><td></td>';
                            massiveReplaceString += '<td bgcolor = "#d5d5d7" height = "1"></td><td></td></tr>';
                            massiveReplaceString += '<tr >';
                            massiveReplaceString += '<td> \
                    <table class="skill_tree_panel_content"  border = "0" cellspacing = "0" cellpadding = "5" bordercolor = "#000000"><tr><td bgcolor = "#020303" class = "tdPaddingFive">';
                            massiveReplaceString += '<div id = "armoryOver' + i + '"><span style = " font-weight: bold;" class="talentNameStyle">' + talent[i][1] + '</span>';
                            massiveReplaceString += '<span class = "rankTooltip">' + textRankColon + ' <span id = "modifyRankTopDescription' + i + '" class = "rankTooltip">' + rankTop[i][0] + '</span>/' + talent[i][2] + '</span>';

                            if (talent[i][5]) //if the talent requires other talents
                            {
                                var index = 0;
                                while (talent[i][5][index * 2] != undefined) {

                                    requirements[index] = talent[i][5][index * 2];
                                    requirement = requirements[index]

                                    requirementPoints = talent[i][5][index * 2 + 1];
                                    requirementName = talent[requirements[index]][1];

                                    if (variableIsSite) {
                                        massiveReplaceString += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="requiresTalent' + i + '" style = "color: red" class = "mySmall">' + requiresRequires + ' ' + requirementPoints + ' ' + requiresPointsIn + ' ' + requirementName + '</span>';
                                        //massiveReplaceString += '<span id="requiresTalent' + i + '" style = "color: red" class = "mySmall"><br>' + requiresRequires + ' ' + requirementPoints + ' ' + requiresPointsIn + ' ' + requirementName + '</span>';

                                    }
                                    index++;
                                }


                            }

                            // if (talent[i][4] != 1 && variableIsSite) //if the talent requires other talents
                            // {
                            //     massiveReplaceString += '<span id = "requiresPoints' + i + '" style = "color: red" class = "mySmall"><br>' + requiresRequires + ' ' + ((talent[i][4] * 0)) + ' ' + requiresPointsIn + ' ' + tree[talent[i][0]] + ' ' + requiresTalents + '</span>';
                            // }

                            massiveReplaceString += '<br /><span id = "modifyDescriptionTop' + i + '" style = " display: block; color: #FFD100" class="talentDescriptionStyle">' + rankTop[i][1] + '</span>';

                            //massiveReplaceString += '<div style = "width: 300px; height: 1px;"></div>';             

                            if (variableIsSite) {
                                //description next
                                //                            massiveReplaceString += '<table border = "0" cellpadding = "0" cellspacing = "0" width = "100%" height = "0"><tr><td width = "50%"><br><span style = "color: #1ae91b; font-size: 12px;">' + textLeftClick + '</span></td><td width = "50%" align = "right"><br><span style = "color: #fb1410; font-size: 12px;">' + textRightClick + '</span></td></tr></table>';
                            }
                            massiveReplaceString += '</div></td></tr></table></td> \
                    \
                    \
                    <td bgcolor = "#a5a5a5" width = "1"><div style = "width: 1px;"></div></td></tr><tr><td></td><td bgcolor = "#4f4f4f" height = "2"></td><td></td></tr></table></div></div></div>';


                            //                    if (is_ie4up)
                            //                        massiveReplaceString += '<div style = "z-index: 99999; position: relative;"><div style = "top: -2px; left: -2px; position: absolute;"><img src = "' + pixelGif + '" width = "50" height = "50" border = "0" onDblClick = "rankTopOnClick(' + i + ');" onClick = "rankTopOnClick(' + i + ');" onMouseOver = "unhideTalent(' + i + ');" onMouseOut = "hideTalent(' + i + ');" onContextMenu = "rankTopOnRightClick(' + i + '); return false;" /></div></div>';
                            //                    else
                            massiveReplaceString += '<div style = "z-index: 99999; position: relative;"><div style = "top: -2px; left: -2px; position: absolute;"><img src = "' + pixelGif + '" width = "50" height = "50" border = "0" ondddblclick = "skill_tree.rankTopOnClick(' + i + ');" onClick = "skill_tree.unhideTalent(' + i + ');"   /></div></div>';

                            massiveReplaceString += '<div id = "iconOverDefault' + i + '" style = "z-index: ' + (5 - talent[i][4]) * 10 + '; position: relative;"><div style = "top: -2px; left: -2px; position: absolute;"><img src = "' + mia_path + 'icon-over-grey.gif" border = "0" /></div></div>';

                            if (rankTop[i][0] >= 1)
                                massiveReplaceString += '<div id = "iconOverGreen' + i + '" style = "position: relative; z-index:' + ((5 - talent[i][4]) * 10 + 2) + ';"><div id = "iconOver"><img src = "' + mia_path + 'icon-over-green.gif" border = "0" /></div></div>';
                            else
                                massiveReplaceString += '<div id = "iconOverGreen' + i + '" style = "visibility:hidden; position: relative; z-index:' + ((5 - talent[i][4]) * 10 + 1) + ';"><div id = "iconOver"><img src = "' + mia_path + 'icon-over-green.gif" border = "0"></div></div>';

                            if (rankTop[i][0] == talent[i][2])
                                massiveReplaceString += '<div id = "iconOverYellow' + i + '" style = "position: relative; z-index:' + ((5 - talent[i][4]) * 10 + 4) + ';"><div id = "iconOver"><img src = "' + mia_path + 'icon-over-yellow.gif" border = "0"></div></div>';
                            else
                                massiveReplaceString += '<div id = "iconOverYellow' + i + '" style = "visibility:hidden; position: relative; z-index:' + ((5 - talent[i][4]) * 10 + 3) + ';"><div id = "iconOver"><img src = "' + mia_path + 'icon-over-yellow.gif" border = "0"></div></div>';

                            if (rankTop[i][0] == 0)
                                massiveReplaceString += '<div id = "talentThumb' + i + '" style = "visibility: hidden; position: relative;"><div id = "wrapper49"><img src = "' + mia_path + imageName + '.jpg" border = "0" ' + iconSize + '></div></div>';
                            else
                                massiveReplaceString += '<div id = "talentThumb' + i + '" style = "position: relative"><div id = "wrapper49"><img src = "' + mia_path + imageName + '.jpg" border = "0" ' + iconSize + '></div></div>';

                            // if (talent[i][5]) 
                            var require_len = requirements.length
                            while (require_len) {
                                require_len--;
                                thisTalentX = talent[i][3];
                                thisTalentY = talent[i][4];

                                requiredTalentX = talent[requirements[require_len]][3];
                                requiredTalentY = talent[requirements[require_len]][4];

                                if (query) {
                                    if (saveTemplate[i] == talent[i][2]) {
                                        arrowYellowStyle = "visible";
                                        arrowGreenStyle = "hidden";
                                    } else if (saveTemplate[i] > 0) {
                                        arrowYellowStyle = "hidden";
                                        arrowGreenStyle = "visible";
                                    } else {
                                        arrowYellowStyle = "hidden";
                                        arrowGreenStyle = "hidden";
                                    }
                                } else {
                                    arrowYellowStyle = "hidden";
                                    arrowGreenStyle = "hidden";
                                }
                                var label_green = 'green_mid_from="' + requirements[require_len] + '" green_mid_to="' + i + '"';
                                var label_yellow = 'yellow_mid_from="' + requirements[require_len] + '" yellow_mid_to="' + i + '"';
                                var label_white = 'white_mid_from="' + requirements[require_len] + '" white_mid_to="' + i + '"';

                                if (thisTalentX == requiredTalentX) { //up and down
                                    var wrapper50_append = "style='z-index:" + ((5 - talent[i][4]) * 10 + 5) + "'";
                                    if ((thisTalentY - 1) == requiredTalentY) {
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown1"><img ' + label_white + '  src = "' + mia_path + '/down-1-grey.gif"></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown1"><span ' + label_green + ' id="arrowGreen' + i + '" style = "visibility:' + arrowGreenStyle + ';"><img src = "' + mia_path + '/down-1-green.gif"></span></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown1"><span ' + label_yellow + '  id="arrowYellow' + i + '" style = "visibility: ' + arrowYellowStyle + ';"><img src = "' + mia_path + '/down-1-yellow.gif"></span></div></div>';
                                    } else if ((thisTalentY - 2) == requiredTalentY) {
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown2"><img ' + label_white + '  src = "' + mia_path + '/down-2-grey.gif"></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown2"><span ' + label_green + ' id = "arrowGreen' + i + '" style = "visibility:' + arrowGreenStyle + ';"><img src = "' + mia_path + '/down-2-green.gif"></span></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown2"><span ' + label_yellow + '  id = "arrowYellow' + i + '" style = "visibility:' + arrowYellowStyle + ';"><img src = "' + mia_path + '/down-2-yellow.gif"></span></div></div>';
                                    } else if ((thisTalentY - 3) == requiredTalentY) {
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown3"><img ' + label_white + '  src = "' + mia_path + '/down-3-grey.gif"></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown3"><span ' + label_green + ' id = "arrowGreen' + i + '" style = "visibility: ' + arrowGreenStyle + ';"><img src = "' + mia_path + '/down-3-green.gif"></span></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown3"><span ' + label_yellow + '  id = "arrowYellow' + i + '" style = "visibility: ' + arrowYellowStyle + ';"><img src = "' + mia_path + '/down-3-yellow.gif"></span></div></div>';
                                    } else if ((thisTalentY - 4) == requiredTalentY) {
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown4"><img ' + label_white + '  src = "' + mia_path + '/down-4-grey.gif"></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown4"><span ' + label_green + ' id = "arrowGreen' + i + '" style = "visibility:' + arrowGreenStyle + ';"><img src = "' + mia_path + '/down-4-green.gif"></span></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown4"><span ' + label_yellow + '  id="arrowYellow' + i + '" style = "visibility:' + arrowYellowStyle + ';"><img src = "' + mia_path + '/down-4-yellow.gif"></span></div></div>';
                                    }
                                } else if (thisTalentY == requiredTalentY) { //across
                                    if (requiredTalentX == (thisTalentX - 1)) {
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowacrossright"><img ' + label_white + '  src = "' + mia_path + '/across-right-grey.gif"></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowacrossright"><span ' + label_green + ' id = "arrowGreen' + i + '" style = "visibility: ' + arrowGreenStyle + ';"><img src = "' + mia_path + '/across-right-green.gif"></span></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowacrossright"><span ' + label_yellow + '  id = "arrowYellow' + i + '" style = "visibility: ' + arrowYellowStyle + ';"><img src = "' + mia_path + '/across-right-yellow.gif"></span></div></div>';
                                    } else if (requiredTalentX == (thisTalentX + 1)) {
                                        massiveReplaceString += '<div id = "wrapper51" ' + wrapper50_append + '><div class = "arrowacrossleft"><img ' + label_white + '  src = "' + mia_path + '/across-left-grey.gif"></div></div>';
                                        massiveReplaceString += '<div id = "wrapper51" ' + wrapper50_append + '><div class = "arrowacrossleft"><span ' + label_green + ' id = "arrowGreen' + i + '" style = "visibility: ' + arrowGreenStyle + ';"><img src = "' + mia_path + '/across-left-green.gif"></span></div></div>';
                                        massiveReplaceString += '<div id = "wrapper51" ' + wrapper50_append + '><div class = "arrowacrossleft"><span ' + label_yellow + '  id = "arrowYellow' + i + '" style = "visibility: ' + arrowYellowStyle + ';"><img src = "' + mia_path + '/across-left-yellow.gif"></span></div></div>';
                                    }
                                } else if (thisTalentX == (requiredTalentX - 1)) {
                                    if ((thisTalentY - 1) == requiredTalentY) {
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdownleft"><img ' + label_white + '  src = "' + mia_path + '/down-left-grey.gif"></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdownleft"><span ' + label_green + ' id = "arrowGreen' + i + '" style = "visibility: ' + arrowGreenStyle + ';"><img src = "' + mia_path + '/down-left-green.gif"></span></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdownleft"><span ' + label_yellow + '  id = "arrowYellow' + i + '" style = "visibility: ' + arrowYellowStyle + ';"><img src = "' + mia_path + '/down-left-yellow.gif"></span></div></div>';
                                    } else {
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown2left"><img ' + label_white + '  src = "' + mia_path + '/down-2-left-grey.gif"></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown2left"><span ' + label_green + ' id = "arrowGreen' + i + '" style = "visibility: ' + arrowGreenStyle + ';"><img src = "' + mia_path + '/down-2-left-green.gif"></span></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown2left"><span ' + label_yellow + '  id = "arrowYellow' + i + '" style = "visibility: ' + arrowYellowStyle + ';"><img src = "' + mia_path + '/down-2-left-yellow.gif"></span></div></div>';
                                    }
                                } else if ((thisTalentX - 1) == requiredTalentX) {
                                    if ((thisTalentY - 1) == requiredTalentY) {
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdownright"><img ' + label_white + '  src = "' + mia_path + '/down-right-grey.gif"></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdownright"><span ' + label_green + '  id = "arrowGreen' + i + '" style = "visibility: ' + arrowGreenStyle + ';"><img src = "' + mia_path + '/down-right-green.gif"></span></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdownright"><span ' + label_yellow + '  id = "arrowYellow' + i + '" style = "visibility:' + arrowYellowStyle + ';"><img src = "' + mia_path + '/down-right-yellow.gif"></span></div></div>';
                                    } else {
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown2right"><img ' + label_white + '  src = "' + mia_path + '/down-2-right-grey.gif"></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown2right"><span ' + label_green + '  id = "arrowGreen' + i + '" style = "visibility: ' + arrowGreenStyle + ';"><img src = "' + mia_path + '/down-2-right-green.gif"></span></div></div>';
                                        massiveReplaceString += '<div id = "wrapper50" ' + wrapper50_append + '><div class = "arrowdown2right"><span ' + label_yellow + '  id = "arrowYellow' + i + '" style = "visibility:' + arrowYellowStyle + ';"><img src = "' + mia_path + '/down-2-right-yellow.gif"></span></div></div>';
                                    }
                                }


                            }
                            massiveReplaceString += '<img src = "' + mia_path + imageName + '-off.jpg" border = "0" ' + iconSize + '>';
                            i++;
                        } else
                            massiveReplaceString += "&nbsp;";
                        massiveReplaceString += "</td>";
                    }
                    massiveReplaceString += "</tr>";
                }

                massiveReplaceString += "</table></td></tr></table>";
                massiveReplaceString += "</div>";

            }


            //box bottom
            massiveReplaceString += '</td></tr>';
            //        massiveReplaceString += '<tr><td class = "tablebotleft"></td>';

            //        massiveReplaceString += '<td class="tablebot">';
            //        massiveReplaceString += '<table border="0" cellpadding="0" cellspacing="0">';
            //        massiveReplaceString += '\
            //  <tr>\
            //    <td class="tablebotleftleft"></td>\
            //    <td width="100%" nowrap class="tablebotbot">\
            //      <div class="talenttreename">\
            //      \
            //      </div>\
            //    </td>\
            //    <td>\
            //    </td>\
            //    <td class = "tablebotrightright"></td>\
            //  </tr>\
            //  </table>';

            //        massiveReplaceString += '<td class = "tablebotright"></td></tr>';

            massiveReplaceString += "</table></td>";

        }
        //end for loop



        massiveReplaceString += "</tr></table></div></div>";




        document.getElementById('replaceMeWithTalents').innerHTML = massiveReplaceString;

        if (!variableIsSite) {
            document.getElementById('hideBoxBot').style.display = "none";
            document.getElementById('hideReset0').style.display = "none";
            document.getElementById('hideReset1').style.display = "none";
            document.getElementById('hideReset2').style.display = "none";

        } else {

            canTurnGreen(0, 0, 1);
            canTurnGreen(0, 1, 1);
            canTurnGreen(0, 2, 1);

        }
        //    $scope.skill_tree;
        skill_tree = $scope;
        $scope.study_skill = function (index) {
            $scope.rankTopOnClick(index)
                //        $scope.unhideTalent(index)
        }
    })




//needed for ajax script loading

//skill_tree = new SKILL_TREE_OBJ();
//skill_tree.rankTopOnClick(' + i + ');