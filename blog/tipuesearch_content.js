var tipuesearch = {"pages":[{"title":"About","url":"./pages/about/","tags":"misc","text":"2016Fall 修課成員網誌"},{"title":"2016Fall w7 四連桿機構模擬","url":"./2016fall-w7-si-lian-gan-ji-gou-mo-ni.html","tags":"Misc","text":"已經四連桿各桿尺寸, 當機構繞行一圈後求特定點的座標, 以 Solvespace 進行點座標追蹤存檔, 得到 w7_fourbar.csv , 根據下圖, 試驗證 Solvespace 機構模擬的資料之正確性. Solvespace 四連桿圖檔: w7_fourbar.slvs (請以滑鼠右鍵存檔) 參考: http://mechanicalexpressions.com/explore/kinematics/4-bar-linkage.html"},{"title":"2016Fall 程式練習題","url":"./2016fall-cheng-shi-lian-xi-ti.html","tags":"Misc","text":"已知截至第六週 2016fallcadpa 的分組資料位於倉儲中的 w6_group.txt , 而從學校修課系統下載的修課人員名條則為 w6_list.txt , 請各組著手練習, 找出尚未納入分組的人員名單, 並研擬如何處置上課一個半月卻尚未進入情況的學員? 以下利用 Brython 讀取位於倉儲中的 w6_list.txt 與 w6_group.txt 資料檔案. 表示學校教務系統中, 修 2016fallcadpa 的學員名單為: window.onload=function(){ brython(1); } from browser import document, html container = document['container'] data = open(\"./../w6_list.txt\").read() container <= data 而截至 w6, 納入分組名單中的學員有: from browser import document, html container2 = document['container2'] data = open(\"./../w6_group.txt\").read() container2 <= data 現在, 誰能夠幫我們找出至今尚未納入分組名單中的學員, 共有那些人？ from browser import document, html # 從 id=script1 程式區段取 data 變數 from script1 import data container3 = document['container3'] data3 = open(\"./../w6_group.txt\").read() group = data3.splitlines() # 希望將分組資料轉為學員數列, 令為變數名稱 result_g result_g = [] # 已經註冊者數列設為 registered registered = [] for line in group: # 去除每一行最後的空白成員 sline = line.split(\",\") # 再將各組拆成個別組員後, 串成 result_g for m in sline: result_g.append(m) #container3 <= len(sline) #container3 <= html.BR() #container3 <= len(result_g) registered = data.splitlines()[:-1] # 設法找出至今尚未分組的學員學號 not_in_group = [c for c in registered if c not in result_g] #container3 <= len(registered) -len(result_g) n = 1 for i in not_in_group: container3 <= \"第\"+str(n)+\"位: \"+ str(i) n = n + 1 container3 <= html.BR()"},{"title":"2016Fall 機械設計主題教學","url":"./2016fall-ji-jie-she-ji-zhu-ti-jiao-xue.html","tags":"Misc","text":"知識管理與最佳化應用實驗室試圖利用計算機程式、網際內容管理、電腦輔助設計實習與協同產品設計實習等課程, 進行與機械設計相關的主題式教學, 其中包含強化創造力的教學、令學員熟習六種工程表達方式, 並且俱備融入協同設計所需要的四大面向知識與技能. 機械設計主題教學 創造力三元素, 機械設計的六種表達, 協同設計的四大面向. 強化創造能力 - 自學力、程式力與想像力 (Creative Competencies) 熟習六種表達 - 口語、文字、2D、3D、理論與實體表達 (Six Presentation Methods) 融入協同設計 - 電腦、網路、軟硬體工具與協同專案 (Collaborative Designs) 2016 Fall CADP A 分組網頁: 第1組 : 40223103 40223109 40423111 40443111 第2組 : 40423101 40423103 40423104 40423117 40423136 40423144 第3組 : 40423105 40423115 40423119 40423128 40423139 40423149 第4組 : 40423106 40423107 40423108 40423121 40423125 40423140 第5組 : 40423109 40423110 40423113 40423130 40423131 40423138 第6組 : 40423112 40423116 40423118 40423127 40423137 40423152 第7組 : 40423114 40423115 40423120 40423122 40423124 第8組 : 40423123 40423129 40423132 40423133 40423155 40423157 第9組 : 40423126 40423135 40423150 40423154 第10組 : 40423141 40423143 40423145 40423146 40423147 40423148 以下為分組資料處理程式: content = open(\"2016fall_cadp_a_groups.txt\").read() #print(content) result = content.splitlines() #print(result) gno = 1 for i in range(len(result)): #print(result[i]) group = result[i].split(\":\") #列出組序 print(\"<a href='../g\"+str(gno)+\"'>第\"+str(gno)+\"組</a>:<br />\") #print(\"第\"+str(gno)+\"組:<br />\") #取 group 第2成員, 用逗點隔開納入數列後, 利用[:-1]去掉最後空白 #print(group[1].split(\",\")[:-1]) gmember = group[1].split(\",\")[:-1] for j in range(len(gmember)): #print(gmember[j]) print(\"<a href='../g\"+str(gno)+\"/\"+str(gmember[j])+\"'>\"+ \\ str(gmember[j])+\"</a> \") print(\"<br />\") gno = gno + 1"}]};