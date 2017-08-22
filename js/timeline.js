// TIMELINE FUNCTIONS

$(document).ready(function() {

var numMonths = 12;
  
var timeline = [
  {month: "august 2016", numArticles: 1 },
  {month: "september 2016", numArticles: 3 },
  {month: "october 2016", numArticles: 7 },
  {month: "november 2016", numArticles: 5 },
  {month: "december 2016", numArticles: 4 },
  {month: "january 2017", numArticles: 2 },
  {month: "february 2017", numArticles: 3 },
  {month: "march 2017", numArticles: 6 },
  {month: "april 2017", numArticles: 9 },
  {month: "may 2017", numArticles: 8 },
  {month: "june 2017", numArticles: 1 },
  {month: "july 2017", numArticles: 6 },
  {month: "august 2017", numArticles: 1 }
];
  
var aug16 = [
  {section: 'news', type: 'crime', link: 'http://features.dbknews.com/2016/07/16/university-of-maryland-police-umpd-pepper-spray-investigation-results/', img: 'assets/img/articles/0-aug/01-Aug16.jpg'}
];
  
var sep16 = [
  {section: 'news', type: 'dev', link: 'http://www.dbknews.com/2016/09/08/umd-campus-parking-elimination-fees/', img: 'assets/img/articles/1-sep/2-Sept16.jpg'},
  {section: 'news', type: 'politics', link: 'http://www.dbknews.com/2016/09/21/sga-sexual-misconduct-title-ix-fee/', img: 'assets/img/articles/1-sep/3-Sept16.jpg'},
  {section: 'news', type: 'crime', link: 'http://features.dbknews.com/2016/09/29/an-unspeakable-tragedy-a-murder-suicide-stuns-college-park/', img: 'assets/img/articles/1-sep/4-Sept16.jpg'}
];
  
var oct16 = [
  {section: 'news', type: 'state', link: 'http://www.dbknews.com/2016/10/01/university-of-maryland-college-park-baltimore-partnership/', img: 'assets/img/articles/2-oct/05-Oct16.jpg'}, 
  {section: 'news', type: 'crime', link: 'http://www.dbknews.com/2016/10/06/umd-gun-route-1-college-park/', img: 'assets/img/articles/2-oct/06-Oct16.jpg'},
  {section: 'news', type: 'ix', link: 'http://www.dbknews.com/2016/10/07/umd-sexual-assault-expelled-students/', img: 'assets/img/articles/2-oct/7-Oct16.jpg'}, 
  {section: 'news', type: 'ix', link: 'http://www.dbknews.com/2016/10/12/university-of-maryland-title-ix-fee-buzzfeed/', img: 'assets/img/articles/2-oct/8-Oct16.jpg'}, //NO IMG
  {section: 'sports', type: 'football', link: 'http://www.dbknews.com/2016/10/21/will-likely-maryland-football-torn-acl/', img: 'assets/img/articles/2-oct/8-Oct16.jpg'},
  {section: 'news', type: 'news', link: 'http://www.dbknews.com/2016/10/26/milo-yiannopoulos-terps-for-trump-canceled-event/', img: 'assets/img/articles/2-oct/9-Oct16.jpg'},
  {section: 'news', type: 'ix', link: 'http://www.dbknews.com/2016/10/26/sga-withdraw-title-ix-fee-proposal/', img: 'assets/img/articles/'} //NO IMG
];
  
var nov16 = [
  {section: 'diversions', type: 'politics', link: 'http://www.dbknews.com/2016/11/11/trump-reaction-podcast/', img: 'assets/img/articles/3-nov/11-Nov16.jpg'},
  {section: 'diversions', type: 'ix activism', link: 'http://www.dbknews.com/2016/11/12/umd-rally-love-trumps-hate-donald-trump-sexual-assault/', img: 'assets/img/articles/3-nov/12-Nov16.jpg'},
  {section: 'sports', type: 'football', link: 'http://www.dbknews.com/2016/11/16/maryland-football-lorenzo-harrison-dj-turner-assault-bb-gun-incident/', img: 'assets/img/articles/3-nov/13-Nov16.jpg'},
  {section: 'news', type: 'dev city', link: 'http://www.dbknews.com/2016/11/14/the-hotel-university-of-maryland-jobs/', img: 'assets/img/articles/3-nov/14-Nov16.jpg'},
  {section: 'sports', type: 'soccer', link: 'http://www.dbknews.com/2016/11/21/maryland-mens-soccer-providence-ncaa-tournament-score-recap/', img: 'assets/img/articles/3-nov/15-Nov16.jpg'}
];

var dec16 = [
  {section: 'news', type: 'politics activism admin', link: 'http://www.dbknews.com/protect-umd-demands/', img: 'assets/img/articles/4-dec/16-Dec16.jpg'},
  {section: 'news', type: 'crime', link: 'http://www.dbknews.com/2016/12/12/white-nationalist-posters-university-of-maryland/', img: 'assets/img/articles/4-dec/17-Dec16.jpg'},
  {section: 'sports', type: 'football', link: 'http://www.dbknews.com/2016/12/26/maryland-boston-college-football-bowl-score/', img: 'assets/img/articles/4-dec/18-Dec16.jpg'},
  {section: 'sports', type: 'legal ix admin', link: 'http://www.dbknews.com/2016/12/09/umd-student-lawsuit-expelled-sexual-assault/', img: 'assets/img/articles/4-dec/19-Dec16.jpg'}
];

var jan17 = [
  {section: 'news', type: 'politics', link: 'http://www.dbknews.com/2017/02/01/maryland-student-detained-trump-travel-ban/', img: 'assets/img/articles/5-jan/20-Jan17.jpg'},
  {section: 'diversions', type: 'humor', link: 'http://www.dbknews.com/2017/01/30/umd-commons-5-fire-trash-dumpster/', img: 'assets/img/articles/5-jan/21-Jan17.jpg'},
];
  
var feb17 = [
  {section: 'news', type: 'dev', link: 'http://www.dbknews.com/2017/02/01/umd-rha-budget-proposals-dots-parking-garage/', img: 'assets/img/articles/6-feb/22-Feb17.jpg'},
  {section: 'diversions', type: 'humor', link: 'http://www.dbknews.com/2017/02/13/lupe-fiasco-album-review/', img: 'assets/img/articles/6-feb/23-Feb17.jpg'},
  {section: 'diversions', type: 'tv', link: 'http://www.dbknews.com/2017/02/15/snl-political-comedy/', img: 'assets/img/articles/6-feb/24-Feb17.jpg'}
];
   
var mar17 = [
  {section: 'news', type: 'politics city', link: 'http://www.dbknews.com/2017/03/02/college-park-mayor-patrick-wojahn-reelection/', img: 'assets/img/articles/7-mar/25-Mar17.jpg'},
  {section: 'news', type: 'dev city', link: 'http://www.dbknews.com/2017/03/02/college-park-vigilante-coffee-shop/', img: 'assets/img/articles/7-mar/26-Mar17.jpg'},
  {section: 'sports', type: 'w-bball', link: 'http://www.dbknews.com/2017/03/25/maryland-oregon-womens-basketball-score-ncaa-tournament/', img: 'assets/img/articles/7-mar/27-Mar17.jpg'},
  {section: 'news', type: 'crime', link: 'http://www.dbknews.com/2017/03/28/umd-white-supremacist-posters/', img: 'assets/img/articles/7-mar/28-Mar17.jpg'},
  {section: 'diversions', type: 'humor', link: 'http://www.dbknews.com/2017/03/27/dadaism-art-form-memes/', img: 'assets/img/articles/7-mar/29-Mar17.jpg'},
  {section: 'sports', type: 'm-bball', link: 'http://www.dbknews.com/2017/03/29/melo-trimble-nba-draft-maryland-basketball/', img: 'assets/img/articles/7-mar/30-Mar17.jpg'},
];
  
var apr17 = [
  {section: 'news', type: 'crime', link: 'http://www.dbknews.com/2017/04/03/body-identified-former-umd-professor/', img: 'assets/img/articles/8-apr/31-Apr17.jpg'},
  {section: 'sports', type: 'w-bball', link: 'http://www.dbknews.com/2017/04/04/maryland-womens-basketball-destiny-slocum-transfer/', img: 'assets/img/articles/8-apr/32-Apr17.jpg'},
  {section: 'sports', type: 'm-bball', link: 'http://www.dbknews.com/2017/04/10/jaylen-brantley-maryland-basketball-transfer-scholarships/', img: 'assets/img/articles/8-apr/33-Apr17.jpg'},
  {section: 'news', type: 'politics', link: 'http://www.dbknews.com/2017/04/13/turning-point-unity-party-sga-umd/', img: 'assets/img/articles/8-apr/34-Apr17.jpg'},
  {section: 'news', type: 'dev', link: 'http://www.dbknews.com/2017/04/13/pg-county-whole-foods-grocery-store-opening/', img: 'assets/img/articles/8-apr/35-Apr17.jpg'},
  {section: 'news', type: 'politics', link: 'http://www.dbknews.com/2017/04/18/trump-chalking-umd-stamp/', img: 'assets/img/articles/8-apr/36-Apr17.jpg'},
  {section: 'news', type: 'city', link: 'http://www.dbknews.com/2017/04/24/fuse-47-apartments-fire-collapse/', img: 'assets/img/articles/8-apr/37-Apr17.jpg'},
  {section: 'news', type: 'politics', link: 'http://www.dbknews.com/2017/04/24/aj-pruitt-wins-sga-election/', img: 'assets/img/articles/8-apr/38-Apr17.jpg'},
  {section: 'news', type: 'dev', link: 'http://www.dbknews.com/2017/04/28/edward-st-john-opening/', img: 'assets/img/articles/8-apr/39-Apr17.jpg'}
];
  
var may17 = [
  {section: 'news', type: 'dev', link: 'http://www.dbknews.com/2017/05/03/milkboy-arthouse-opening-college-park/', img: 'assets/img/articles/9-may/40-May17.jpg'},
  {section: 'news', type: 'crime', link: 'http://www.dbknews.com/2017/05/03/phi-kappa-tau-hate-bias-incident/', img: 'assets/img/articles/9-may/41-May17.jpg'},
  {section: 'news', type: 'activism admin', link: 'http://www.dbknews.com/2017/05/11/protectumd-occupy-admin-protest/', img: 'assets/img/articles/9-may/42-May17.jpg'},
  {section: 'diversions', type: 'music', link: 'http://www.dbknews.com/2017/05/09/2-chainz-performance-art-attack-xxxiv/', img: 'assets/img/articles/9-may/43-May17.jpg'},
  {section: 'news', type: 'ix admin crime legal activism', link: 'http://itsreal.diamondbacklab.com/', img: 'assets/img/articles/9-may/44-May17.jpg'},
  {section: 'news', type: 'crime', link: 'http://features.dbknews.com/2017/05/23/university-of-maryland-homicide-richard-collins-death-sean-urbanski-bowie-state/', img: 'assets/img/articles/9-may/45-May17.jpg'},
  {section: 'sports', type: 'm-lac', link: 'http://www.dbknews.com/2017/05/29/maryland-lacrosse-national-championship-ohio-state/', img: 'assets/img/articles/9-may/46-May17.jpg'},
  {section: 'sports', type: 'w-lac', link: 'http://www.dbknews.com/2017/05/31/maryland-womens-lacrosse-national-championship-undefeated/', img: 'assets/img/articles/9-may/47-May17.jpg'}
];
    
var jun17 = [
  {section: 'news', type: 'admin', link: 'http://www.dbknews.com/2017/06/02/loh-announcement-hate-bias-sanctions/', img: 'assets/img/articles/10-jun/48-Jun17.jpg'},
  {section: 'sports', type: 'baseball', link: 'http://www.dbknews.com/2017/06/15/maryland-baseball-rob-vaughn-coach-szefc/', img: 'assets/img/articles/10-jun/49-Jun17.jpg'},
  {section: 'news', type: 'legal admin', link: 'http://www.dbknews.com/2017/06/21/umd-facilities-management-employees-lawsuit-racial-discrimination/', img: 'assets/img/articles/10-jun/50-Jun17.jpg'},
  {section: 'news', type: 'news', link: 'http://www.dbknews.com/2017/06/30/neutral-gender-drivers-license-umd-transgender/', img: 'assets/img/articles/10-jun/51-Jun17.jpg'}
];
  
var jul17 = [
  {section: 'news', type: 'admin', link: 'http://www.dbknews.com/2017/07/06/new-cheif-diversity-officer/', img: 'assets/img/articles/11-jul/52-Jul17.jpg'},
  {section: 'news', type: 'dev', link: 'http://www.dbknews.com/2017/07/12/lotsa-pizza-grand-opening-college-park/', img: 'assets/img/articles/11-jul/53-Jul17.jpg'}
];
  
var aug17 = [
  {section: 'sports', type: 'dev', link: 'http://www.dbknews.com/2017/08/02/cole-field-house-umd-dedication-renovation-practice-facility/', img: 'assets/img/articles/12-aug/54-Aug17.jpg'}
];
  
  
function articleBlocks(array, id) {
  for (var i = 0; i < array.length; i++ ) {
    var section = array[i].section;
    var type = array[i].type;
    var link = array[i].link;
    var img = array[i].img;
    
    $('.article-block')
      .addClass(section)
      .addClass(type)
      .css('background-image', 'url('+img+')');
    
    $('.btn-wrapper > a').attr('href', link);
    
  }
}
  
//articleBlocks(aug16);
//articleBlocks(sep16);
  
  
  
  
  
  
  
  
  
});
