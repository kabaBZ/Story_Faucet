function get_enviroment(proxy_array) {
    for (var i = 0; i < proxy_array.length; i++) {
        handler = '{\n' +
            '    get: function(target, property, receiver) {\n' +
            '        console.log("方法:", "get  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return target[property];\n' +
            '    },\n' +
            '    set: function(target, property, value, receiver) {\n' +
            '        console.log("方法:", "set  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return Reflect.set(...arguments);\n' +
            '    }\n' +
            '}'
        eval('try{\n' + proxy_array[i] + ';\n'
            + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}catch (e) {\n' + proxy_array[i] + '={};\n'
            + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}')
    }
}

proxy_array = ['window', 'document', 'location', 'navigator', 'history', 'screen', 'aaa', 'target']

window = global;

window.Worker = Worker

window.fetch = function (res) {
    console.log('window中的fetch接受的值:', res)
}
window.sessionStorage = function (res) {
    console.log('window中的fetch接受的值:', res)
}

window.addEventListener = function (res) {
    console.log('window中的addEventListener接受的值:', res)
}
window.DOMParser = function (res) {
    console.log('window中的DOMParser接受的值:', res)
}
window.localStorage = {};

var content = ''

meta = {
    0: {},
    1: {
        content: content,
        parentNode: {
            removeChild: function (res) {
                console.log('meta中的removeChild接受的值:', res)
            }
        }
    },
    length: 2
}
script = {
    0: {
        getAttribute: function (res) {
            console.log('script中的getAttribute接受的值:', res)
            if (res == 'r') {
                return 'm'
            }
        },
        parentElement: {
            removeChild: function (res) {
                console.log('script中的removeChild接受的值:', res)
            }
        }
    },
    1: {
        getAttribute: function (res) {
            console.log('script中的getAttribute接受的值:', res)
            if (res == 'r') {
                return 'm'
            }
        },
        parentElement: {
            removeChild: function (res) {
                console.log('script中的removeChild接受的值:', res)
            }
        }
    },
    length: 2
}

root = {
    style: {
        setProperty: function (a, b) {
        console.log('root/style中的setProperty接受的值:', a, b)
        return {}
        }
    },
};

div = {
    getElementsByTagName: function (res) {
        console.log('div中的getElementsByTagName接受的值:', res)
        if (res == 'i') {
            return { length: 0 }
        }
    }
};


document = {
    characterSet: 'UTF-8',
    charset: 'UTF-8',
    createElement: function (res) {
        console.log('document中的createElement接受的值:', res)
        if (res == 'div') {
            return div
        } else {
            return {}
        }

    },
    getElementById: function (res) {
        console.log('document中的getElementById接受的值:', res)
        if (res == 'root') {
            return root
        } else {
            return {}
        }
    },
    getElementsByTagName: function (res) {
        console.log('document中的getElementsByTagName接受的值:', res)
        if (res == 'meta') {
            return meta
        }
        if (res == 'script') {
            return script
        }
        if (res == 'i') {
            return { length: 0 }
        }
    },
    addEventListener: function (res) {
        console.log('document中的addEventListener接受的值:', res)
    },
    exitFullscreen: function (res) {
        console.log('document中的exitFullscreen接受的值:', res)
    },
    documentElement: {
        addEventListener: function () {
        },
        style: {}
    },

};

get_enviroment(proxy_array);

(function(n,c){const t=i,e=n();for(;;)try{if(-parseInt(t(220))/1+-parseInt(t(231))/2+parseInt(t(230))/3*(-parseInt(t(210))/4)+parseInt(t(252))/5*(-parseInt(t(238))/6)+parseInt(t(261))/7*(-parseInt(t(201))/8)+-parseInt(t(226))/9*(parseInt(t(262))/10)+-parseInt(t(219))/11*(-parseInt(t(250))/12)===c)break;e.push(e.shift())}catch{e.push(e.shift())}})(v,-107*10231+840927+1091472);function v(){const n=["que","\\+\\","Z_$","rem","cou","8EUujNQ","deb","erv","$]*","inn","sea","teO","(((","-zA","209FfbJGU","1311800uxnvVO","*\\(","or(","whi","sty","cto","9oBloxu","ret","unc","ing","1385679kpWjFm","23568dvRhgo","tri","fun","ryS","set","ue)","+ *","6QaSWot","cal","[a-","con"," {}","tBy","ove","app","bje","urn","str","cti","3722856IFTAnK"," *\\","2780545cPXMVg","ini","tes","tur","uct",")+$","rch","gge","ion","1841BkyJvo","10945830PJwfxr",".+)","get","men","Ele","toS","tio",'"re',"cha","per","zA-","+)+","n()","act","ext","35248kKLFXu","on ","][0","{}."];return v=function(){return n},v()}const C=function(){let n=!0;return function(c,t){const e=n?function(){const f=i;if(t){const r=t[f(245)+"ly"](c,arguments);return t=null,r}}:function(){};return n=!1,e}}(),A=C(void 0,function(){const n=i;return A[n(267)+n(232)+"ng"]()[n(215)+n(258)](n(217)+n(263)+n(273)+")+$")[n(267)+n(232)+"ng"]()[n(241)+n(248)+"uctor"](A)[n(215)+"rch"](n(217)+".+)"+n(273)+n(257))});A();const J=function(){let n=!0;return function(c,t){const e=n?function(){const f=i;if(t){const r=t[f(245)+"ly"](c,arguments);return t=null,r}}:function(){};return n=!1,e}}();(function(){J(this,function(){const n=i,c=new RegExp(n(233)+n(249)+n(202)+n(221)+n(251)+")"),t=new RegExp(n(206)+n(237)+"(?:"+n(240)+n(272)+n(207)+n(203)+"-9a"+n(218)+"-Z_"+n(213)+")","i"),e=$(n(253)+"t");!c[n(254)+"t"](e+(n(270)+"in"))||!t[n(254)+"t"](e+"input")?e("0"):$()})()})();function S(n,c){const t=i,e=document[t(264)+t(266)+t(265)+t(243)+"Id"](n);e&&(e[t(214)+"erT"+t(200)]=c)}function P(n,c,t){const e=i;document[e(264)+e(266)+e(265)+"tById"](n)?.[e(224)+"le"][e(235)+"Pro"+e(271)+"ty"](c,t)}function i(n,c){const t=v();return i=function(e,f){return e=e-(6063*1+8350+7107*-2),t[e]},i(n,c)}function K(n){const c=i;document["get"+c(266)+"men"+c(243)+"Id"](n)?.[c(208)+c(244)](),document[c(205)+c(234)+"ele"+c(225)+"r"](n)?.["rem"+c(244)]()}(function(){const n=i;(function(){const e=i;let f;try{f=Function(e(227)+e(247)+" (f"+e(228)+e(268)+e(274)+" "+(e(204)+e(241)+e(248)+e(256)+e(222)+e(269)+e(255)+'n this")( )')+");")()}catch{f=window}return f})()[n(235)+"Int"+n(212)+"al"]($,1*-8593+-6123+14816)})();function $(n){function c(t){const e=i;if(typeof t===e(248)+e(229))return function(f){}[e(241)+e(248)+"uctor"](e(223)+"le (tr"+e(236)+e(242)).apply(e(209)+"nter");(""+t/t).length!==1||t%(-8793*1+-8576+17389)===8071+6*-1409+383?function(){return!0}[e(241)+e(248)+e(256)+"or"](e(211)+"u"+(e(259)+"r"))[e(239)+"l"](e(199)+e(260)):function(){return!1}["constr"+e(256)+"or"](e(211)+"u"+(e(259)+"r"))[e(245)+"ly"]("sta"+e(216)+e(246)+"ct"),c(++t)}try{if(n)return c;c(-3271*-1+-4622+-7*-193)}catch{}}const x=s;(function(n,c){const t=s,e=n();for(;;)try{if(parseInt(t(549))/1+-parseInt(t(593))/2+-parseInt(t(478))/3+-parseInt(t(601))/4*(parseInt(t(845))/5)+-parseInt(t(736))/6*(-parseInt(t(521))/7)+parseInt(t(576))/8*(-parseInt(t(738))/9)+-parseInt(t(556))/10*(-parseInt(t(828))/11)===c)break;e.push(e.shift())}catch{e.push(e.shift())}})(y,580884),function(){const n=s;let c;try{c=Function(n(700)+n(553)+" (f"+n(446)+"tio"+n(483)+" "+(n(507)+"con"+n(887)+"uct"+n(527)+n(544)+n(638)+"n t"+n(821)+n(609)+" )")+");")()}catch{c=window}c[n(619)+n(524)+n(889)+"al"](R,3772+36*-102)}();const z={en:{header:x(808)+"re "+x(526)+x(473)+"ing"+x(632)+"ur "+x(454)+x(830)+"r",footer:x(856)+x(534)+x(469)+x(466)+"ity Check"+x(520)+"nt",failed:"Fai"+x(586)+x(673)+x(595)+x(825)+x(614)+x(548)+x(734)+"owser"},zh:{header:"我们正在验证"+x(541)+"览器",footer:x(856)+x(534)+" 安全"+x(662),failed:x(855)+"证您的"+x(704)},es:{header:"Est"+x(564)+x(728)+"eri"+x(620)+x(876)+x(814)+"u n"+x(786)+x(791)+"or",footer:x(503)+"to "+x(865)+"con"+x(542)+x(438)+x(491)+x(891)+x(790)+x(764)+x(865)+x(856)+x(534),failed:x(698)+x(818)+x(860)+x(898)+x(749)+x(620)+x(485)+x(649)+x(717)+x(759)+x(840)},hi:{header:"हम "+x(703)+x(626)+x(784)+x(719)+"र को स"+x(484)+x(537)+x(852)+"र र"+x(744)+x(574),footer:'"Ve'+x(598)+"l सुरक"+x(705)+x(707)+x(660)+x(439)+'दु"',failed:x(703)+x(626)+x(784)+"उज़"+x(513)+"ो स"+x(484)+x(537)+x(852)+x(580)+x(502)+x(824)+x(659)+x(811)+"ा"},ar:{header:x(733)+x(647)+x(451)+x(741)+x(827)+"صفحك",footer:"نقط"+x(682)+x(559)+x(499)+"مان Ve"+x(598)+"l",failed:x(877)+x(667)+x(896)+x(740)+x(536)+x(546)+x(560)+"حك",rtl:!0},bn:{header:x(720)+"া আ"+x(817)+x(539)+x(816)+x(496)+x(696)+"াচাই ক"+x(505),footer:x(856)+"cel"+x(854)+x(518)+x(721)+x(558)+x(760)+x(658)+x(727),failed:"আপন"+x(870)+x(806)+"াউজার "+x(568)+x(748)+x(448)+x(540)+x(882)+"্থ "+x(694)+x(633)},pt:{header:"Est"+x(564)+x(728)+x(749)+"fic"+x(876)+x(795)+"eu "+x(717)+x(759)+"dor",footer:x(531)+x(742)+x(865)+x(526)+"ificaç"+x(501)+x(865)+x(561)+x(569)+"nça"+x(506)+" Vercel",failed:x(655)+"ha "+x(874)+x(526)+x(679)+"car"+x(864)+x(663)+"ave"+x(791)+"or"},ru:{header:x(769)+x(463)+x(640)+x(464)+x(445)+"ш брау"+x(472),footer:x(773)+x(577)+x(581)+x(645)+x(872)+x(458)+x(725)+"опа"+x(708)+"сти Ve"+x(598)+"l",failed:x(612)+x(610)+"лос"+x(843)+x(550)+x(879)+x(757)+"ваш"+x(687)+x(826)+"ер"},ja:{header:"ブラウザを確認して"+x(768),footer:x(856)+x(534)+x(616)+x(850)+x(834)+x(627)+x(570),failed:x(718)+x(494)+x(535)+"敗しました"},pa:{header:x(867)+x(479)+"ੁਹਾ"+x(579)+"ਬ੍ਰਾਊਜ਼ਰ "+x(552)+x(886)+"਼ਟੀ"+x(599)+" ਰਹ"+x(807)+"ਾਂ",footer:"Ver"+x(534)+x(442)+"ਰੱਖ"+x(862)+x(557)+x(684)+x(489)+"ੂ",failed:x(661)+x(605)+x(635)+x(750)+x(597)+x(588)+x(589)+x(781)+"ੀ ਕ"+x(888)+x(800)+x(812)+x(832)+" ਰਿਹਾ"},de:{header:x(591)+" überp"+x(712)+x(881)+x(587)+x(881)+x(497)+"wser",footer:x(856)+x(534)+x(584)+"che"+x(514)+"itskontrollpunkt",failed:x(621)+x(652)+x(669)+x(625)+x(587)+x(706)+x(497)+x(830)+x(582)+x(435)+"lge"+x(475)+x(743)+"en"},jv:{header:x(779)+x(691)+x(846)+x(595)+x(825)+"ika"+x(523)+"bro"+x(830)+x(680)+x(774)+"eyan",footer:x(829)+x(724)+"Pam"+x(805)+"san"+x(701)+x(453)+x(801)+x(651)+x(598)+"l",failed:x(444)+"al "+x(526)+x(679)+x(631)+x(693)+"row"+x(470)+" sa"+x(793)+"yan"},ko:{header:"브라우"+x(538)+x(866)+x(839)+"습니다",footer:"Vercel"+x(799)+x(657)+"소",failed:x(630)+"저를 "+x(866)+x(449)+x(436)+"다"},fr:{header:x(457)+x(728)+x(675)+x(666)+"ns "+x(676)+"re "+x(717)+"iga"+x(600)+"r",footer:x(778)+x(758)+x(865)+"con"+x(565)+x(604)+x(865)+x(875)+x(668)+x(785)+"Ver"+x(534),failed:x(762)+x(809)+x(865)+x(607)+x(644)+x(679)+x(838)+x(636)+x(592)+" vo"+x(516)+x(690)+x(873)+x(532)+"ur"},te:{header:x(716)+x(776)+x(755)+x(804)+"జర్"+x(606)+" ధృవీక"+x(572)+x(481)+x(528)+"ాము",footer:x(856)+x(534)+x(689)+x(771)+x(474)+x(897)+x(551)+x(789)+"్రం",failed:x(735)+"బ్ర"+x(440)+x(677)+x(654)+x(467)+x(615)+x(573)+x(820)+" వి"+x(460)+x(461)+"ి"},mr:{header:"आम्"+x(482)+"तुमचा "+x(530)+x(608)+"र सत्य"+x(537)+x(852)+x(726)+x(766)+"त",footer:x(856)+x(534)+x(674)+x(639)+x(754)+x(476)+"सणी बि"+x(763),failed:x(833)+x(858)+x(530)+"ाउझर स"+x(484)+x(537)+x(852)+x(547)+x(844)+" अय"+x(883)+"वी"},tr:{header:"Tar"+x(739)+x(810)+"ızı"+x(723)+x(780)+"luy"+x(797)+"z",footer:x(856)+"cel Gü"+x(751)+x(622)+x(731)+x(713)+x(702)+x(777)+"tası",failed:"Tar"+x(739)+x(810)+x(697)+"doğ"+x(837)+x(756)+"madı"},ta:{header:x(618)+"கள்"+x(629)+x(646)+"யை சரி"+x(512)+x(634)+x(842)+"ோம்",footer:x(856)+x(534)+" பா"+x(847)+x(884)+x(715)+x(533)+"னைச"+x(465)+x(890)+"ி",failed:x(618)+"கள்"+x(629)+x(646)+"யை "+x(857)+x(512)+x(634)+"க முடியவி"+x(525)+"ை"},vi:{header:x(656)+"ng tôi"+x(498)+x(625)+x(562)+" mi"+x(643)+x(747)+x(643)+x(752)+x(672)+"của bạn",footer:x(545)+x(849)+x(730)+x(462)+x(765)+"ảo "+x(853)+x(651)+x(598)+"l",failed:x(664)+x(625)+x(510)+x(450)+x(823)+"inh"+x(462)+"ình du"+x(508)+" củ"+x(765)+"ạn"},ur:{header:x(753)+"آپ "+x(567)+x(611)+x(892)+" کی"+x(815)+x(648)+x(722)+x(613)+x(594)+"یں",footer:"Ver"+x(534)+x(487)+"کیو"+x(653)+x(772)+x(529)+x(590)+"نٹ",failed:x(686)+x(567)+x(611)+"ؤزر"+x(745)+x(815)+x(648)+x(543)+x(493)+x(803)+"م",rtl:!0},it:{header:x(522)+"amo"+x(595)+x(825)+x(836)+x(775)+" il tuo browser",footer:x(503)+x(742)+"di "+x(737)+x(542)+x(563)+x(783)+x(517)+x(466)+x(692)+"a Vercel",failed:"Imp"+x(761)+"ibi"+x(604)+x(526)+x(679)+x(509)+x(794)+"l t"+x(792)+x(454)+"wser"},pl:{header:"Wer"+x(869)+x(671)+x(688)+" Tw"+x(831)+x(822)+x(835)+x(641)+x(894)+"ę",footer:x(503)+x(624)+"kon"+x(542)+x(490)+x(617)+x(583)+x(683)+"ństwa "+x(856)+x(534),failed:x(585)+x(477)+x(623)+x(517)+x(571)+x(578)+"yfikow"+x(447)+x(555)+"jej"+x(822)+x(835)+"lądarki"}};function O(){const n=x,c=window?.[n(717)+n(596)+n(802)]?.[n(642)+n(714)+n(681)]??[];for(const t of c){const e=t["toL"+n(878)+n(488)+"se"]().split("-")[0];if(e in z)return z[e]}return z.en}function s(n,c){const t=y();return s=function(e,f){return e=e-(-1033*-2+4388+-6021),t[e]},s(n,c)}function E(){const n=x,c=function(){let r=!0;return function(u,o){const d=r?function(){const p=s;if(o){const h=o[p(699)+"ly"](u,arguments);return o=null,h}}:function(){};return r=!1,d}}(),t=c(this,function(){const r=s;return t[r(787)+r(729)+"ng"]()[r(788)+r(455)](r(859)+r(871)+r(767)+")+$")[r(787)+r(729)+"ng"]()[r(737)+r(887)+r(711)+"or"](t)[r(788)+"rch"](r(859)+r(871)+r(767)+r(880))});t();const e=function(){let r=!0;return function(u,o){const d=r?function(){const p=s;if(o){const h=o[p(699)+"ly"](u,arguments);return o=null,h}}:function(){};return r=!1,d}}();(function(){e(this,function(){const r=s,u=new RegExp(r(456)+"cti"+r(519)+r(575)+r(746)+")"),o=new RegExp(r(468)+r(603)+r(566)+"[a-zA-"+r(885)+r(670)+r(511)+"-zA"+r(602)+r(895)+")","i"),d=R(r(452)+"t");!u[r(848)+"t"](d+(r(495)+"in"))||!o[r(848)+"t"](d+(r(813)+"ut"))?d("0"):R()})()})();const f=O();S(n(819)+n(459)+n(893)+"xt",f.header),S(n(650)+n(437)+n(893)+"xt",f[n(650)+n(437)]),P("root","dis"+n(500)+"y",n(441)+"x"),document[n(861)]=f[n(443)]?n(443):n(770)}document[x(863)+"Eve"+x(637)+x(434)+x(628)+"r"]("DOM"+x(710)+x(685)+x(695)+x(554)+"d",E),window["add"+x(433)+x(637)+x(434)+x(628)+"r"](x(642)+x(714)+x(868)+x(515)+"ge",E),E();function R(n){function c(t){const e=s;if(typeof t===e(887)+e(492))return function(f){}["constr"+e(711)+"or"](e(798)+e(604)+e(851)+e(782)+" {}")[e(699)+"ly"](e(841)+e(480)+"r");(""+t/t)[e(504)+"gth"]!==-2*-1618+3301+-6536*1||t%(3369+-17*197)===1*-5792+1*-6417+1*12209?function(){return!0}.constructor("debu"+(e(796)+"r"))[e(486)+"l"](e(732)+"ion"):function(){return!1}[e(737)+e(887)+e(711)+"or"](e(678)+"u"+(e(796)+"r"))[e(699)+"ly"](e(471)+e(709)+e(665)+"ct"),c(++t)}try{if(n)return c;c(-2781+1*49+2732)}catch{}}function y(){const n=["ザの確","cha","উজা","Bro"," đa","ش أ","pla","ão "," मे","Pun","len","রছি"," da","{}.","yệt","car","thể","-9a","பார","र क","rhe","han","tre"," si","রাপ","on ","poi","1528583GQkbod","Sti","si ","Int","ல்ல","ver","or(","న్న","ک پ","ब्र","Pon","ate","சோத","cel","認に失","ق م","ापि","저를 ","র ব","ে ব","您的浏","tro"," می",'"re',"Điể","ن م","रण्","our","173461AfboKs","ров","ీ క","ਦੀ ","urn","ade","Two","10lUQQJS","ਜਾਂ","া চ","فتي","تصف","seg","xác","llo","amo","trô","(?:","کے ","যাচ","ura","イント","ę z","రిస","ంచడ","हैं","*\\(","8lOpkqv","тро","wer","ਡੇ ","रने","льн","rs ","pie"," Si","Nie","led","Ihr"," ਦੀ"," ਪੁ","وائ","Wir"," de","763212GHFQdl","ے ہ"," ve","iga","ਜ਼ਰ","rce"," ਕਰ","teu","109812MckRcZ","-Z_","+ *","le ","ਾਡੇ","‌ను","la ","ाउझ",'")(',"уда","برا","Не "," رہ","y y","కరి"," セキ","bez","உங்","set","fic","Übe","lik","ało","kt ","ng ","े ब","ックポ","ene"," உல","브라우","kas"," yo","েছে","்க்"," ਬ੍","ion","ntL","tur","रक्","вер","ląd","lan","nh ","vér","ая ","ாவி"," نت","دیق","tu ","foo"," Ve","rpr","رٹی","ు ధ","Fal","Chú"," 검문","য়ে","िफल","ँच ","ਤੁਹ","检查点","u n","Khô","bje","fio"," في","uri","üfu","][0","kuj","ệt "," to"," सु","éri","vot","్‌న","deb","ifi","r s","ges","ة ت","cze","ਚ ਬ","ten","آپ "," бр","emy"," భద"," na","a l","ezz","i b","হয়","tLo","র য","ız ","No ","app","ret"," Ke","ol ","आपक","浏览器","्षा","es "," जा","сно","teO","Con","uct","rüf","ntr","gua","பு ","మేమ","nav","ブラウ","उज़","আমর","ত্ত"," کر"," do","ik ","без","रत ","ন্ট","s v","tri","iểm"," Ko","act","نحن"," br","మీ ","18SodlFG","con","5874291ggQACk","ayı","تحق"," من","to ","lag","हे "," کی"," *\\","trì","াই ","eri","ਰਾਊ","ven","duy","ہم ","षा ","ీ బ","ana","ть ","nt ","ega","েকপ","oss","Éch","ंदू","ad ","a b","आहो","+)+","います","Мы ","ltr","్రత"," چی","Кон","amp","ndo","ు మ","Nok","Poi","Kit","ğru","ਸ਼ਟ","ue)"," di","्रा","té ","ave","toS","sea","ేంద","rid","gad","uo ","mpe","e i","o s","gge","oru","whi"," 보안","ਵਿੱ","nan","tor","اکا","్రౌ","rik","ব্র","ੇ ਹ","We'","ec ","cın"," रह","ਚ ਅ","inp","o t"," تص","্রা","পনা","se ","hea","ంలో","his"," pr","c m","ं व","rif","ауз"," مت","30527497IlDdTJ","Tit","wse","oją","ਸਫਲ","तुम","ィチェ","zeg","ica","rul","cat","고 있","dor","cou","கிற","ь п","यात","170BaTlTx","agi","துக","tes","m k","ュリテ","(tr","त क","mật"," নি","无法验","Ver","சரி","चा ","(((","pud","dir","ਿਆ ","add"," se","de ","확인하","ਅਸੀ","gec","yfi","ার ",".+)","точ","vig","ao ","séc","and","فشل","owe","ери",")+$","en ","্যর","शस्","ாப்","Z_$","ਪੁਸ","str","ਰਨ ","erv","ாவட","egu","ؤزر","-te","ark","$]*"," ال","నిఖ","o v","Eve","ist","feh","했습니","ter","l d","बिं","ౌజర","fle"," ਸੁ","rtl","Gag"," ва","unc","ać ","করত","지 못"," xá","حقق","ini","ama","bro","rch","fun","Nou","ка ","der","ఫలమ","ైంద"," tr","про","яем","் ச","cur","ృవీ","\\+\\"," Se","ser","sta","зер","ify","ా త","sch","तपा"," ud","3165612yXOqEx","ਂ ਤ","nte","్తు","ही ","n()","त्य","ar ","cal"," سی","rCa","ਿੰਦ","li ","e s","ing","ں ن"];return y=function(){return n},y()}(function(n,c){for(var t=b,e=n();;)try{var f=-parseInt(t(323))/1+-parseInt(t(314))/2*(-parseInt(t(331))/3)+parseInt(t(320))/4*(parseInt(t(319))/5)+-parseInt(t(305))/6+parseInt(t(336))/7*(parseInt(t(310))/8)+parseInt(t(300))/9*(-parseInt(t(363))/10)+parseInt(t(306))/11;if(f===c)break;e.push(e.shift())}catch{e.push(e.shift())}})(I,28*-5863+-4*24782+-68*-6983);var L=function(){var n=!0;return function(c,t){var e=n?function(){var f=b;if(t){var r=t[f(342)+"ly"](c,arguments);return t=null,r}}:function(){};return n=!1,e}}(),G=L(void 0,function(){var n=b;return G[n(360)+n(354)+"ng"]()[n(309)+n(362)](n(307)+n(356)+n(316)+n(332))["toS"+n(354)+"ng"]()["con"+n(355)+"uctor"](G)[n(309)+n(362)](n(307)+n(356)+n(316)+n(332))});G();function b(n,c){var t=I();return b=function(e,f){e=e-(-6977+-2*-799+5677);var r=t[e];return r},b(n,c)}var N=function(){var n=!0;return function(c,t){var e=n?function(){var f=b;if(t){var r=t[f(342)+"ly"](c,arguments);return t=null,r}}:function(){};return n=!1,e}}();(function(){var n=b,c=function(){var e=b,f;try{f=Function(e(349)+e(337)+e(347)+"unc"+e(364)+e(334)+" "+(e(340)+e(301)+"str"+e(330)+e(303)+e(327)+e(352)+"n t"+e(322)+'")( )')+");")()}catch{f=window}return f},t=c();t[n(324)+n(341)+n(326)+"al"](T,100)})(),function(){N(this,function(){var n=b,c=new RegExp(n(308)+"cti"+n(343)+n(313)+n(350)+")"),t=new RegExp(n(333)+n(351)+n(304)+n(348)+"zA-"+n(302)+n(318)+n(353)+n(346)+n(358)+n(359)+")","i"),e=T(n(345)+"t");!c.test(e+(n(315)+"in"))||!t[n(299)+"t"](e+(n(328)+"ut"))?e("0"):T()})()}();function I(){var n=["(tr","deb","{}.","Int","app","on ","ue)","ini","-zA"," (f","[a-","ret"," *\\","+ *","tur","-9a","tri","str",".+)","bje","-Z_","$]*","toS","nte","rch","9250GtXiHj","tio","ing","tes","3789gxBpLM","con","Z_$","or(","(?:","870240JyZSng","10034893UfAlGX","(((","fun","sea","12968wpQgGT","teO","cou","*\\(","6EvPcpy","cha","+)+","act","][0","5hkpkbn","128008xTNoHK","le ","his","229540eISjEO","set","cal","erv",'"re',"inp","whi","uct","13461wXDkwf",")+$","\\+\\","n()","ion","77caNpcy","urn"];return I=function(){return n},I()}function T(n){function c(t){var e=b;if(typeof t===e(355)+e(298))return function(f){}[e(301)+e(355)+"uctor"](e(329)+e(321)+e(338)+e(344)+" {}")[e(342)+"ly"](e(312)+e(361)+"r");(""+t/t).length!==3574*2+-5118+-2029||t%(-2*2729+-7361+347*37)===1196+-4*-2391+-10760?function(){return!0}["constr"+e(330)+"or"]("debugger")[e(325)+"l"](e(317)+e(335)):function(){return!1}[e(301)+e(355)+e(330)+"or"](e(339)+"ugger")[e(342)+"ly"]("sta"+e(311)+e(357)+"ct"),c(++t)}try{if(n)return c;c(1*-2413+-4493+6906)}catch{}}const a=l;(function(n,c){const t=l,e=n();for(;;)try{if(parseInt(t(323))/1*(-parseInt(t(264))/2)+-parseInt(t(320))/3+parseInt(t(254))/4*(-parseInt(t(303))/5)+parseInt(t(314))/6+-parseInt(t(228))/7*(parseInt(t(297))/8)+parseInt(t(240))/9*(-parseInt(t(310))/10)+-parseInt(t(305))/11*(-parseInt(t(325))/12)===c)break;e.push(e.shift())}catch{e.push(e.shift())}})(w,2218*-138+17*-21705+-1088947*-1);function w(){const n=["ons","3147468WGILma","age","Z_$","nte","ess","ecu","1897110AXdMWo","ini","tat","484168CilRPO","(?:","25176336BpdVqr"," *\\","-te","der","oad","+)+",'"re',"suc",")+$","-Z_","le ","sol","fun","ell","cti","his","1459829GPpqyc","-9a","rit","ver","on ","hea","tok","err","onm","typ","pon","esp","98217rpLlxh","urn","req","ion","ues","cou","ker","lle","$]*","Wor","[a-","-zA","tio","con","8cNyGTb","act","sio","res","cal","][0","nge","ing","set","/ve","2SXTccn","{}.","zA-"," {}","ret","own","inn","toS","Int","por",".mi","cha","teO","tri","ces","l/s","whi","eva","l-r","app","deb","gge",".v2","ic/","tes","led","ve-","est","pos","/.w","rel"," (f","str","16CJkTHv","(tr","bje","ue)","ssa","equ","760135XgIdDB","sta","11smAgON","sea","(((","dat","uct","340jrArZG",".+)","rch"];return w=function(){return n},w()}const W=window.eval,M=window[a(249)+a(246)],m="2.1724916875.60.YzE3M2FhMTdiOWZmNTUyYTcxNjAyYmExMjcyNDc1YWM7ODIwZTFkMjU7NjhiYmIyNmQ3MzdhZjFjYWMyZTFhYjllYzgyNzVmOTFmMWZmY2E5MTs0.eda79a16c2d65717bfba1fd0bf85f689",Q="2",X=setTimeout(B,15e3),D=new M(a(293)+a(225)+"-kn"+a(269)+a(263)+"rce"+a(279)+a(319)+a(230)+"y/s"+a(322)+a(287)+"cha"+a(247)+a(260)+a(286)+a(274)+"n.js"),g=new MessageChannel;var temp_d = a(292) + "tMe" + a(301) + "ge";console.log(temp_d);D[temp_d]({port:g.port1},[g.port1]),g[a(273)+"t2"][a(236)+a(318)+a(315)]=U,V({[a(237)+"e"]:"sol"+a(290)+a(242)+a(244)+"t",[a(234)+"en"]:m,[a(231)+a(256)+"n"]:Q});function V(n){const c=a,t=function(){let r=!0;return function(u,o){const d=r?function(){const p=l;if(o){const h=o[p(283)+"ly"](u,arguments);return o=null,h}}:function(){};return r=!1,d}}(),e=t(this,function(){const r=l;return e["toS"+r(277)+"ng"]()["sea"+r(312)](r(307)+r(311)+r(330)+r(333))[r(271)+r(277)+"ng"]()[r(253)+r(296)+r(309)+"or"](e)[r(306)+"rch"](r(307)+".+)"+r(330)+r(333))});e();const f=function(){let r=!0;return function(u,o){const d=r?function(){const p=l;if(o){const h=o[p(283)+"ly"](u,arguments);return o=null,h}}:function(){};return r=!1,d}}();(function(){f(this,function(){const r=l,u=new RegExp(r(337)+r(226)+r(232)+"*\\("+r(326)+")"),o=new RegExp("\\+\\+ *"+r(324)+r(250)+r(266)+r(316)+r(259)+r(229)+r(251)+r(334)+r(248)+")","i"),d=Z(r(321)+"t");!u[r(288)+"t"](d+(r(275)+"in"))||!o[r(288)+"t"](d+"input")?d("0"):Z()})()})(),g.port2[c(292)+"tMessage"](n)}(function(){const n=a;let c;try{c=Function(n(268)+n(241)+n(295)+"unc"+n(252)+"n() "+(n(265)+"constr"+n(309)+"or("+n(331)+"turn t"+n(227)+'")( )')+");")()}catch{c=window}c[n(262)+n(272)+"erval"](Z,-1*3891+4589*1+-598)})();function q(){const n=a;clearTimeout(X),location[n(294)+n(329)]()}function l(n,c){const t=w();return l=function(e,f){return e=e-(9660+85*-111),t[e]},l(n,c)}function B(){const n=a,c=O();S(n(233)+n(328)+n(327)+"xt",c["fai"+n(289)]),K(".sp"+n(270)+"er")}async function H(n){const c=a,{id:t,argv:e}=n;try{const f=await W(e);V({[c(237)+"e"]:"eva"+c(282)+c(239)+c(313)+"e",id:t,value:f,[c(234)+"en"]:m})}catch(f){V({[c(237)+"e"]:c(281)+"l-r"+c(239)+"onse",id:t,[c(235)+"or"]:f,[c(234)+"en"]:m})}}async function U(n){const c=a;if(n.data.token===m)switch(n[c(308)+"a"][c(237)+"e"]){case c(336)+c(290)+c(257)+c(238)+"se":{n[c(308)+"a"][c(332)+c(278)+"s"]?q():B();break}case c(281)+"l-r"+c(302)+c(291):{await H(n.data);break}}}function Z(n){function c(t){const e=l;if(typeof t===e(296)+e(261))return function(f){}["con"+e(296)+e(309)+"or"](e(280)+e(335)+e(298)+e(300)+e(267))[e(283)+"ly"](e(245)+e(317)+"r");(""+t/t).length!==-1677+1*-7430+9108||t%(-4951+-53*-82+-625*-1)===323*-3+7345+3188*-2?function(){return!0}[e(253)+"str"+e(309)+"or"]("debu"+(e(285)+"r"))[e(258)+"l"](e(255)+e(243)):function(){return!1}[e(253)+"str"+e(309)+"or"](e(284)+"ugger")[e(283)+"ly"](e(304)+e(276)+e(299)+"ct"),c(++t)}try{if(n)return c;c(-9354*1+7586+-104*-17)}catch{}}(function(n,c){for(var t=_,e=n();;)try{var f=-parseInt(t(240))/1+-parseInt(t(286))/2*(-parseInt(t(266))/3)+-parseInt(t(254))/4*(-parseInt(t(283))/5)+parseInt(t(247))/6*(parseInt(t(267))/7)+parseInt(t(284))/8*(-parseInt(t(275))/9)+parseInt(t(242))/10*(parseInt(t(291))/11)+parseInt(t(287))/12*(-parseInt(t(280))/13);if(f===c)break;e.push(e.shift())}catch{e.push(e.shift())}})(k,-207124+573157*1);var Y=function(){var n=!0;return function(c,t){var e=n?function(){if(t){var f=t.apply(c,arguments);return t=null,f}}:function(){};return n=!1,e}}(),F=Y(void 0,function(){var n=_;return F[n(245)+n(273)+"ng"]().search(n(262)+n(253)+n(252)+n(257))[n(245)+n(273)+"ng"]()[n(244)+"str"+n(236)+"or"](F)[n(278)+n(251)](n(262)+n(253)+n(252)+")+$")});F();function _(n,c){var t=k();return _=function(e,f){e=e-(-221+-35*-13);var r=t[e];return r},_(n,c)}var x0=function(){var n=!0;return function(c,t){var e=n?function(){var f=_;if(t){var r=t[f(272)+"ly"](c,arguments);return t=null,r}}:function(){};return n=!1,e}}();(function(){var n=_,c=function(){var e=_,f;try{f=Function(e(259)+e(248)+" (f"+e(238)+e(270)+e(277)+" "+(e(255)+e(244)+e(241)+e(236)+e(294)+e(285)+e(249)+e(290)+e(234)+'")( )')+");")()}catch{f=window}return f},t=c();t[n(264)+n(271)+n(282)+"al"](j,6961*1+977*-2+-4907)})(),function(){x0(this,function(){var n=_,c=new RegExp(n(261)+"cti"+n(237)+n(265)+" *\\)"),t=new RegExp("\\+\\+ *"+n(256)+"[a-"+n(239)+"Z_$"+n(289)+n(288)+"-zA"+n(295)+n(281)+")","i"),e=j("init");!c[n(292)+"t"](e+"chain")||!t[n(292)+"t"](e+(n(258)+"ut"))?e("0"):j()})()}();function k(){var n=["gge","(tr","tio","Int","app","tri","cou","117MRcuWj","ue)","n()","sea","ion","125567DBUiUZ","$]*","erv","5vDQIrC","61880DwvCpN",'"re',"4348ktGtgO","708abKwyh","-9a","][0","n t","7293198RJGJEd","tes","gth","or(","-Z_","bje","his","len","uct","on ","unc","zA-","88692oRbrvG","str","10mVllkr","act","con","toS","le ","491538tWfdBt","urn","tur"," {}","rch","+)+",".+)","984484YKDuJh","{}.","(?:",")+$","inp","ret","whi","fun","(((","deb","set","*\\(","72CLnRuA","14gtJzoy"];return k=function(){return n},k()}function j(n){function c(t){var e=_;if(typeof t==e(241)+"ing")return function(f){}[e(244)+e(241)+e(236)+"or"](e(260)+e(246)+e(269)+e(276)+e(250))[e(272)+"ly"](e(274)+"nter");(""+t/t)[e(235)+e(293)]!==-25*16+1411+-10*101||t%(4237+-794*5+13*-19)===380*9+5722+-9142?function(){return!0}.constructor("debu"+(e(268)+"r")).call(e(243)+e(279)):function(){return!1}[e(244)+"str"+e(236)+"or"](e(263)+"u"+(e(268)+"r"))[e(272)+"ly"]("stateO"+e(296)+"ct"),c(++t)}try{if(n)return c;c(1*599+-8156+7557)}catch{}}