/* ===========================================================
   The CEO Group — shared site script
   Behaviors + content data + renderers. Everything is guarded
   by element presence so each page runs only what it needs.
   =========================================================== */
(function () {
  "use strict";

  /* ---------- Data: members ---------- */
  var MEMBERS = [
    ["Logo_SCoraluzzo.jpg", "Samuel Coraluzzo Co."],
    ["Inspira-Health-Logo_Vertical-Treatment_Process-Black-and-Process-Blue-C-NEW-LOGO.jpg", "Inspira Health"],
    ["RCSJ_stacked2.jpg", "Rowan College of South Jersey"],
    ["Ocean-First-logo.jpg", "OceanFirst Bank"],
    ["Century-Savings-Bank-Logo.jpg", "Century Savings Bank"],
    ["BBT_Logo.png", "BB&T"],
    ["First-Harvest-Logo.png", "First Harvest Credit Union"],
    ["Logo_FSProduce.jpg", "F&S Produce Co."],
    ["Logo_NardelliFarms.jpg", "Nardelli Bros."],
    ["Espoma_Logo_wTagOL.png", "The Espoma Co."],
    ["BB-Poultry.jpg", "B&B Poultry Co."],
    ["Logo_AgroGroup.jpg", "AGRO Merchants Group"],
    ["Sorbello-Sam-AC-Freezer-Logo-2019-1.jpg", "AC Freezer / Sorbello"],
    ["Logo_Safeway.jpg", "Safeway Freezer Corp."],
    ["northeast-precast_logo2.jpg", "Northeast Precast"],
    ["Logo_Ogren.jpg", "Arthur J. Ogren, Inc."],
    ["GE-Mechanical.jpg", "GE Mechanical, LLC"],
    ["Logo_Bradway.jpg", "Bradway Trucking, Inc."],
    ["Toytota-new-square-logo.jpg", "Toyota of Vineland"],
    ["Logo_Rossi-002.jpg", "Rossi Motors, Inc."],
    ["Chick-fil-A-logo.png", "Chick-fil-A"],
    ["Logo_TowerHospitality.jpg", "Tower Hospitality, LLC"],
    ["Logo_MintsInsurance.jpg", "Mints Insurance Agency"],
    ["Logo_ARFanucci.jpg", "A.R. Fanucci Companies"],
    ["Franklin-Insurance.png", "Franklin Insurance / FIA Group"],
    ["cumberland_hrz_rgb_pos-002.jpg", "Cumberland Mutual"],
    ["Roman-Buonadonna-Financial-e1570467977577.jpg", "Romano Buonadonna Financial"],
    ["Ameriprise-Logo.jpg", "Liberty Point Advisors / Ameriprise"],
    ["Logo_SmithsonFinancial.jpg", "Smithson Financial / Wells Fargo"],
    ["Ultra-Clean-Logo-2.0-Final.jpg", "Ultra Clean Technologies"],
    ["Logo_Chemglass.jpg", "Chemglass Life Sciences"],
    ["Logo_PCS.jpg", "PCS, LLC"],
    ["comtec-systems-logo1-002.png", "ComTec Systems"],
    ["Logo_AllKey.jpg", "All Key Solutions"],
    ["Logo_UMH.jpg", "UMH Properties, Inc."],
    ["Logo_EasternPacific.jpg", "Eastern Pacific Development"],
    ["Russo-Mario-Logo-002.jpg", "Magnolia Investments"],
    ["Logo_WallaceSupply.jpg", "Wallace Supply Co."],
    ["Logo_BarettaPlumbing.jpg", "Barretta Plumbing, Heating & Cooling"],
    ["Logo_BensProServ.jpg", "Ben's Professional Services"],
    ["RJG-LOGO-1-FINAL-B.jpg", "Ron Jaworski Golf"],
    ["Premier-Ortho-New-Logo-2023.jpg", "Premier Orthopaedic Associates"],
    ["Authority-Logo-JPG-002.jpg", "Cumberland County Improvement Authority"],
    ["Logo_CapitalBank-1.jpg", "Capital Bank of New Jersey"],
    ["Logo_LMLaw.jpg", "Louis N. Magazzu, LLC"],
    ["Logo_Mamacita.jpg", "Mamacita Inc."],
    ["Logo_AllenAssoc.jpg", "Allen Associates"],
    ["Logo_DJ_New.jpg", "J & D Produce Co."],
    ["Logo_CreativeAchievAcademy.jpg", "Creative Achievements Academy"]
  ];

  /* Member website links (from the original site) */
  var MEMBER_LINKS = {
    "Samuel Coraluzzo Co.": "http://www.coraluzzo.com/",
    "The Espoma Co.": "http://www.espoma.com/",
    "Franklin Insurance / FIA Group": "http://www.franklininsuranceadjusters.com/",
    "F&S Produce Co.": "http://www.freshcutproduce.com/",
    "Nardelli Bros.": "http://www.nardellibrosinc.com/",
    "Arthur J. Ogren, Inc.": "http://www.ogrenconstruction.com/",
    "Magnolia Investments": "http://www.rfccontainer.com/",
    "Rossi Motors, Inc.": "http://www.rossihonda.com/",
    "Wallace Supply Co.": "http://www.wallace-supply.com/",
    "ComTec Systems": "https://comtecsystems.net/",
    "Toyota of Vineland": "https://www.toyotaofvineland.com/",
    "Bradway Trucking, Inc.": "http://www.bradwaytrucking.com/"
  };

  /* ---------- Data: charitable giving timeline ---------- */
  var IMPACT = [
    ["2020-21", "<b>$25,000</b> to the “School Counts!” scholarship program at the Cumberland County Campus Educational Foundation, Rowan College of South Jersey."],
    ["April 2020", "<b>$30,000</b> in food deliveries to Inspira Health hospitals in Vineland, Bridgeton, and Elmer during the height of the pandemic."],
    ["November 2019", "<b>$6,000</b> to Cumberland County Technical School and a fourth consecutive <b>$6,000</b> to its SkillsUSA, HOSA, and Robotics clubs."],
    ["2018", "<b>$6,000</b> to Cumberland County Technical School, plus gifts to Manna from Heaven and the Salvation Army's Project Thanksgiving."],
    ["2017", "<b>$6,000</b> to Cumberland County Technical School and the Cumberland County College Francis J. Reilly Scholarship Fund."],
    ["2016", "Support for Family Promise, Steered Straight, the Vineland & Bridgeton food pantries, Manna from Heaven, and Project Thanksgiving."],
    ["2015", "Celebrating Our Veterans, Manna From Heaven, and Project Thanksgiving."],
    ["2014", "Established the Francis J. Reilly Scholarship Fund at Cumberland County College."],
    ["2013", "North Vineland Little League's Challenger League."],
    ["2012", "The Vineland YMCA."],
    ["2011", "Funded a food truck to serve those in need across the community."],
    ["2010", "The Dream Foundation."]
  ];

  /* ---------- Data: in the news ---------- [category, year, title, excerpt, page-slug] ---------- */
  var NEWS = [
    ["Donation", "2018", "Toyota of Vineland & RK Auto Donate to County Tech", "Burns-Kull Automotive Group and Toyota Motor Sales gave $10,000 to the Cumberland County Technical Education Center for automotive-technology scholarships and equipment.", "county-tech-automotive"],
    ["Community", "2020", "CEO Group Provides Meals for Inspira Health", "The group funded $30,000 in restaurant meals delivered to staff at Inspira's Vineland, Bridgeton, and Elmer hospitals during the pandemic.", "meals-for-inspira"],
    ["Honors", "2018", "Goya Foods' Unanue Brothers Earn the Spirit of Francis Award", "Bob and Peter Unanue were honored as the CEO Group's One Cumberland campaign delivered $18,000 to the Spirit of Francis fund benefiting Puerto Rico.", "goya-spirit-of-francis"],
    ["Honors", "", "Lou Magazzu Honored by the NAACP", "Executive Director Louis N. Magazzu was recognized by the NAACP for his service to the community.", "magazzu-naacp"],
    ["Honors", "2020", "Dr. Thomas Dwyer Honored as a Cumberland County Legend", "Premier Orthopaedic's Dr. Thomas A. Dwyer was named a Cumberland County Legend by the CompleteCare Family Health Foundation.", "dwyer-county-legend"],
    ["Honors", "2018", "Forosisky & Penza Named Italian Heritage Honorees", "Sandra Zagari Forosisky and member Robert A. Penza received the Italian Cultural Foundation of South Jersey's Spirit of Achievement Award.", "italian-heritage"],
    ["Donation", "2018", "Inspira Receives $50K for the M25 Initiative", "A second $50,000 gift brought funding for the M25 Initiative's Housing First Collaborative to $100,000 to combat chronic homelessness.", "inspira-m25"],
    ["Community", "2019", "Bob Conner Named a Pride in Millville Recipient", "Mints Insurance owner and member Bob Conner received the Greater Millville Chamber of Commerce's 2019 Pride in Millville award.", "conner-pride-millville"],
    ["Community", "2018", "JAWS Youth Playbook Bike Drive", "The CEO Group supported Ron Jaworski's JAWS Youth Playbook and its bike drive for children across the region.", "jaws-bike-drive"],
    ["Community", "2018", "Sam Sorbello Honors Late Wife in Fight Against Cancer", "Member Sam Sorbello funded the Colleen Sorbello Research Laboratory at the University of New Haven in memory of his late wife.", "sorbello-cancer-research"],
    ["Business", "2018", "Espoma Deepens Its Roots in Millville", "The family-owned organic fertilizer maker opened a new Millville headquarters featuring a 672-plant living green wall.", "espoma-millville"],
    ["Health", "2018", "Inspira Opens New Detox & Addiction Treatment Unit", "Inspira Health Center Bridgeton dedicated an inpatient acute detox and addiction treatment center serving five counties.", "inspira-detox"],
    ["Health", "2017", "The Rossi Senior Emergency Department Opens", "The $6 million Rose and Graziano Rossi Senior Emergency Department opened at Inspira Medical Center Vineland, funded in part by member Ron Rossi.", "rossi-senior-ed"],
    ["Business", "2017", "F&S Produce Purchases the Vineland Progresso Plant", "F&S Produce bought the former Progresso soup plant, a 585,000-square-foot facility, with plans to add dozens of jobs.", "fs-produce-progresso"],
    ["Business", "2018", "Landis Square Senior Apartments Open", "Member Hans Lampart opened Landis Square, a 74-unit affordable housing community for seniors in Vineland.", "landis-square"],
    ["Business", "2018", "New Millville Plastics Facility Planned", "A plan to develop a plastics reprocessing facility at the former Wheaton Glass site aimed to create hundreds of jobs.", "millville-plastics"],
    ["Business", "2018", "Rossi Honda Named a 2018 Energy Efficiency Leader", "Rossi Honda of Vineland was one of just 33 U.S. dealerships recognized by Honda's Green Dealer Program for energy performance.", "rossi-honda-energy"],
    ["Milestone", "1996", "The CEO Group Is Created to Enhance Area Opportunities", "Founded by Francis J. Reilly, the group united the region's chief executives to advance Cumberland County's prosperity.", "ceo-group-founded"],
    ["Milestone", "", "CEO Group Raises Over $40,000", "A CEO Group fundraising effort raised more than $40,000 for community causes across the region.", "ceo-group-raises-40000"]
  ];

  /* ---------- Data: notable guest speakers ---------- */
  var NOTABLE = [
    ["2008", "Chris Christie", "U.S. Attorney for NJ; later Governor of New Jersey"],
    ["2010", "Ron Jaworski", "NFL quarterback & ESPN analyst"],
    ["2009", "Christopher Gardner", "Author, “The Pursuit of Happyness”"],
    ["2009", "James J. Florio", "Former Governor of New Jersey"],
    ["2006, 2009, 2014, 2018", "Stephen M. Sweeney", "NJ Senate President"],
    ["1997, 2001, 2003, 2008, 2012, 2014", "Frank A. LoBiondo", "U.S. Congressman, 2nd District"],
    ["2017", "Kim Guadagno", "Lt. Governor of New Jersey"],
    ["2002, 2006, 2018, 2019, 2020", "Jeff Van Drew", "U.S. Congressman / NJ State Senator"]
  ];

  /* ---------- Data: guest speakers by year ---------- */
  var SPEAKERS = [
    ["2020", ["Sen. Jeff Van Drew", "Sen. Michael Testa Jr.", "Assemblymen Simonson & McClellan", "Deputy Speaker John Burzichelli", "Corinne Kolesinskas — JAWS Youth Playbook", "Paul Lambrecht — Inspira", "Dr. Michael Corrado"]],
    ["2019", ["Bob Carr", "Dr. Fred Keating — Rowan College", "Donna Perez", "Freeholder Director Joe Derella", "Mayor Anthony Fanucci", "Mayor Albert Kelly", "Tom Raftery — Falcon Consulting", "Sen. Jeff Van Drew"]],
    ["2018", ["Dr. Yves Salomon-Fernandez — Cumberland County College", "Dr. Dina Elliott — CC Technical School", "Anthony Mongeluzo — PCS", "Joe Derella — Freeholder Director", "Fred Sorbello & Sam Pipitone", "Senate President Steve Sweeney", "Sen. Jeff Van Drew", "Mayor Frank Gilliam — Atlantic City", "Joey Jingoli — Hard Rock Casino", "Stephen Barse — Gruccio Pepper", "Ren Cicalese III & Julie Strohlein — Alloy Silverstein", "Dan Lyons & John King — Team Concepts"]],
    ["2017", ["John D'Angelo — Inspira Health", "Rob Monaco — Garden State Investments", "Dr. Yves Salomon-Fernandez — CCC", "Dr. Dina Rossi-Elliott — CCTEC", "Dave Hanrahan — Capital Bank", "Jeff George — Merrill Lynch", "Gerard Velazquez — CCIA", "Lt. Gov. Kim Guadagno"]],
    ["2016", ["Mayor Don Guardian — Atlantic City", "Joe Derella — Freeholder Director", "Tom Laftery III & Lisa Johnson — Falcon Consulting", "Anthony Fanucci — Vineland City Council", "Michael DeLeon — Steered Straight", "Ralph Padilla — PRAC New Jersey", "Freeholder Jim Sauro", "Dr. Dina Elliott — CCTEC", "Sandy Forosisky — Vineland EDA"]],
    ["2015", ["Anthony Fanucci — Vineland City Council", "Joseph Derella — Freeholder Director", "Joseph Isabella — Vineland Municipal Electric", "Ken Pustizzi — SNJ Today", "Susan Gogan & Angela Speakman — Wheaton Arts", "Russell Swanson — Vineland DID", "Jim Watson — CCIA", "Sandy Forosisky — Vineland EDA", "Christie DiLeonardo — CC Job Training", "Dr. Dina Elliott — CCTEC", "Dr. Shelley Schneider — CCC"]],
    ["2014", ["Jill Michal — United Way of Greater Philadelphia & SNJ", "Dina Elliott — CC Vocational Education", "U.S. Rep. Frank LoBiondo", "Louis N. Magazzu — Executive Director", "Senate President Steve Sweeney", "John DiAngelo — Inspira", "William J. Hughes", "Don Schmincke — High Altitude Leadership"]],
    ["2013", ["Ron Nametko & Brian Farrell — Magic Sports", "Deputy Director Doug Long", "Jeannie Hanson & Brian McDermott — Marsh McLennan", "Anthony Fanucci — Vineland City Council", "David J. Hanrahan, Sr. — Capital Bank", "David J. Hemple — Century Savings Bank", "Edward J. Geletka — Colonial Bank", "Russell Gillespie, Sr. — Sun National Bank", "Donna Schaffner — Rutgers Food Innovation Center", "Dianne Holtaway", "Jim Hammerstedt — Fabietti, Hale & Hammerstedt", "Robert Scarpa — Habitat for Humanity", "Annette Catino — QualCare Alliance", "Mayor Ruben Bermudez — Vineland", "Dennis Palmer — Landis Sewerage Authority"]],
    ["2012", ["David Kotok — Cumberland Advisors", "Jennifer Webb-McRae — Cumberland County Prosecutor", "U.S. Rep. Frank LoBiondo", "Crystal Allen — Bellview Winery", "Carl Kirstein — CC Freeholders", "Tom Sheppard — CC Freeholders", "Frances Sykes — Pascale Sykes Foundation", "Lauren VanEmbden — Levoy Theatre"]],
    ["2011", ["Bill Whelan — CC Freeholders", "Vickie Simek — CCC", "Tom Sheppard — CC Freeholders", "David Yunghans — Constant Contact", "Ruben Mendelson — Broadview Networks"]],
    ["2010", ["Louis N. Magazzu — CC Freeholders", "Ron Jaworski — ESPN", "David Kotok — Cumberland Advisors", "Michael Foster — Foster Institute", "Dr. Thomas A. Isekenegbe — CCC", "Ray Angelini & Joe Joyce — RAI Solar", "Kim Wood — CC Economic Development", "Chet Kaletkowski — SJ Health System", "Katie O'Malley"]],
    ["2009", ["Christopher Gardner — Author, “The Pursuit of Happyness”", "James H. Florio — The Florio Group (former NJ Governor)", "Sen. Steven Sweeney", "Steve Lonegan — Mayor of Bogota", "Douglas Fisher — NJ Secretary of Agriculture", "Robert Romano — Mayor of Vineland", "Louis N. Magazzu — CC Freeholders", "Chet Kaletkowski — SJ Hospital Systems", "Charles Nutt — The Daily Journal"]],
    ["2008", ["Chris Christie — U.S. Attorney for New Jersey", "U.S. Rep. Frank LoBiondo", "David Kotok — Cumberland Advisors", "Tom Drury — SJ Technology Park at Rowan", "Dr. Kenneth L. Ender — CCC", "Matthew W. Milam — Assemblyman", "Gregg Edwards — Center for Policy Research of NJ", "Darlene R. Barber — CCTEC", "Ben Merighi"]],
    ["2007", ["Philip Kirschner — NJ Business & Industry Association", "Hans Lampart — Eastern Pacific Development", "John W. Pedersen — JW Pedersen Architect", "Dan Gaby — E3", "Sen. Nicholas Asselta", "Mayor Jim Quinn — Millville", "Mayor Perry D. Barse — Vineland", "Charles “Chalky” Ottinger — Vineland Schools", "Curtis Cello — American Management Co."]],
    ["2006", ["Michael R. Hagy — VISTAGE International", "Dr. Kenneth L. Ender — CCC", "Sen. Stephen M. Sweeney", "Henry Berman — Pittsgrove Township Schools", "Louis N. Magazzu — CC Freeholders", "Assemblyman Jeff Van Drew", "Assemblyman Nelson Albano", "Ronald J. Casella — CC Prosecutor", "Edward R. McGlynn, Sr."]],
    ["2005", ["Louis N. Magazzu — CC Freeholders", "Raymond J. Compari — Rutgers School of Business", "Fredrick A. Parmenter — CCTEC", "Dr. Adrienne J. Cresswell — Health-Pact", "Lee F. Brahin & Joseph G. Savaro — NJ Motorsports Park", "Thomas W. Weirich — Weirich Wealth Management", "David R. Thierman — Attorney", "Tom Fitzpatrick, CPA", "Bernard J. Audet — Creative Financial Group", "Michelle Leyman — CASA"]],
    ["2004", ["Arthur J. Marchand — Cumberland County Surrogate", "Sen. Nicholas Asselta", "Stephen D. Barse — Attorney", "Philip Kirschner — NJBIA", "Dr. Thomas A. Dwyer — Premier Orthopaedic", "Susanne LaFrankie — Browning-LaFranckie", "Sharon Bruno — Creative Achievement Academy", "Darlene R. Barber — CCTEC"]],
    ["2003", ["U.S. Rep. Frank A. LoBiondo", "Gay Taylor — Museum of American Glass, Wheaton", "Don E. Schreiber — CCTEC", "Joe Biegalski — Newfield National Bank", "Dennis DiLazzero — Minotola National Bank", "Bart Speziali — Sun National Bank", "Dr. William Reynolds — Rutgers School of Business", "Lisa Wesen — CCC", "David D. Fawkner — The Kintock Group", "Chester B. Kaletkowski — SJ Healthcare"]],
    ["2002", ["Assemblyman Nicholas Asselta", "Barry Taylor, Henry Levari & Claire Morris — Wheaton Village", "Dr. Geraldyne Foster — Bridgeton Schools", "Dr. G. Larry Miller — Millville Schools", "Dr. Clarence Hoover — Vineland Schools", "Dr. Kenneth L. Ender — CCC", "Joseph E. Gonzalez & Steve Wilson — NJBIA", "Assemblyman Jeff Van Drew", "Mayor Perry D. Barse — Vineland", "Dr. John Fuentes — CC Employment & Training", "David McCollum — Rehabilitation Hospital of SJ", "Dr. Robert E. Hancox — CCC", "Robert D. Baker — American Red Cross"]],
    ["2001", ["U.S. Rep. Frank A. LoBiondo", "Louis N. Magazzu — CC Freeholders", "Nancy Monaghan — The Daily Journal", "David F. Parry & Steven Bradway — Boy Scouts of America", "Alan L. Stedman & David Vance — Rutgers Family Business Program", "Chester B. Kaletkowski — SJ Health Care", "Russell Gillespie — SJ Health Care", "Paul Yatcko — Vineland Municipal Electric", "Stephen D. Barse — Gruccio Pepper"]],
    ["2000", ["Don A. Wadsworth — National Fraud Center", "Dr. Kenneth L. Ender — CCC", "Gerard Velasquez — CC Empowerment Zone", "Dr. Peter Finley", "John Rosenfeld & Larry Cier — NJ EDA", "Mayor Perry D. Barse — Vineland", "Rev. James A. Dunkins & Shawn Douglas — Shiloh Baptist C.D.C."]],
    ["1999", ["Dr. Kenneth L. Ender — CCC", "Charles Thomas — JTPA / CC Economic Development", "James H. Florio — The Florio Group", "Thomas D. Begley, Jr. — Attorney", "Mayor Michael A. Pirolli — Bridgeton", "Lisa Coane — NJ EDA", "Assemblyman Nicholas Asselta", "Joe Meissner — Power Marketing", "Mayor Brett Schundler — Jersey City", "Don E. Schreiber — CCTEC"]],
    ["1998", ["Mayor Jim Quinn — Millville", "Dennis Palmer — Landis Sewerage Authority", "Ray Compari — Management Institute", "John Fischer — CCC", "Joseph Keenan — Vineland Schools", "Danny Wright — Millville Schools", "Kim Warker — Millville Economic Development", "Michael Collins — Federal Reserve Bank of Philadelphia", "Louis N. Magazzu — CC Freeholder", "Stephen Kehs — CC Planning", "Gerald Kohn — Vineland Schools", "Gerald Kramme — SJ Hospital Systems"]],
    ["1997", ["William Rodefeld — NJ EDA", "Dr. Edward Salmon — NJ Board of Public Utilities", "Steven Wymbs — CCIA", "Mayor Anthony Campanella — Vineland", "U.S. Rep. Frank LoBiondo", "Paul Cooper — SJ Hospital Systems", "Jack Collins — Speaker, NJ Assembly", "Douglas Fisher — CC Freeholders"]],
    ["1996", ["Assemblyman Nick Asselta", "Dr. Chip Chapdelaine — Cumberland County College"]]
  ];

  /* ---------- Data: photo galleries ---------- */
  var GALLERIES = [
    ["golf2025", "18th Annual Reilly Memorial Golf Tournament", "2025 · Golf", ["golf2025-1.png", "golf2025-2.jpg", "golf2025-3.jpg", "golf2025-4.jpg", "golf2025-5.jpg", "golf2025-6.jpg"]],
    ["golf2020", "CEO Golf Tournament", "2020 · Golf", ["golf2020-1.jpg", "golf2020-2.jpg", "golf2020-3.jpg", "golf2020-4.jpg", "golf2020-5.jpg", "golf2020-6.jpg"]],
    ["golf2019", "CEO Golf Tournament", "2019 · Golf", ["golf2019-1.jpg", "golf2019-2.jpg", "golf2019-3.jpg", "golf2019-4.jpg", "golf2019-5.jpg", "golf2019-6.jpg"]],
    ["golf2018", "Annual Golf Outing", "2018 · Golf", ["golf2018-1.png", "golf2018-2.jpg", "golf2018-3.jpg", "golf2018-4.jpg", "golf2018-5.jpg", "golf2018-6.jpg"]],
    ["golf2017", "Annual Golf Outing", "2017 · Golf", ["golf2017-1.png", "golf2017-2.jpg", "golf2017-3.jpg", "golf2017-4.jpg", "golf2017-5.jpg", "golf2017-6.jpg"]],
    ["golf2016", "Annual Golf Outing", "2016 · Golf", ["golf2016-1.jpg", "golf2016-2.jpg", "golf2016-3.jpg", "golf2016-4.jpg", "golf2016-5.jpg", "golf2016-6.jpg"]],
    ["golf2015", "Annual Golf Outing", "2015 · Golf", ["golf2015-1.jpg", "golf2015-2.jpg", "golf2015-3.jpg", "golf2015-4.jpg", "golf2015-5.jpg", "golf2015-6.jpg"]],
    ["golf2014", "Annual Golf Outing", "2014 · Golf", ["golf2014-1.jpg", "golf2014-2.jpg", "golf2014-3.jpg", "golf2014-4.jpg", "golf2014-5.jpg", "golf2014-6.jpg"]],
    ["legacy2017", "Legacy Night", "2017 · Social", ["legacy2017-1.jpg", "legacy2017-2.jpg", "legacy2017-3.jpg", "legacy2017-4.jpg", "legacy2017-5.jpg", "legacy2017-6.jpg"]],
    ["xmas2018", "Holiday Christmas Party", "2018 · Social", ["xmas2018-1.png", "xmas2018-2.jpg", "xmas2018-3.jpg", "xmas2018-4.jpg", "xmas2018-5.jpg", "xmas2018-6.jpg"]],
    ["xmas2017", "Holiday Christmas Party", "2017 · Social", ["xmas2017-1.png", "xmas2017-2.jpg", "xmas2017-3.jpg", "xmas2017-4.jpg", "xmas2017-5.jpg", "xmas2017-6.jpg"]],
    ["xmas2015", "Holiday Christmas Party", "2015 · Social", ["xmas2015-1.jpg", "xmas2015-2.jpg", "xmas2015-3.jpg", "xmas2015-4.jpg", "xmas2015-5.jpg", "xmas2015-6.jpg"]],
    ["landis2018", "Landis Square Senior Apartments", "2018 · Community", ["landis2018-1.jpg", "landis2018-2.jpg", "landis2018-3.jpg", "landis2018-4.jpg", "landis2018-5.jpg", "landis2018-6.jpg"]]
  ];

  /* ---------- Helpers ---------- */
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /* ---------- Renderers ---------- */
  function buildCell(m) {
    var url = MEMBER_LINKS[m[1]];
    var c = el(url ? "a" : "div", "logo-cell"); c.title = m[1];
    if (url) { c.href = url; c.target = "_blank"; c.rel = "noopener"; c.setAttribute("aria-label", m[1] + " (opens in a new tab)"); }
    var img = el("img"); img.src = "assets/img/" + m[0]; img.alt = m[1]; img.loading = "lazy";
    c.appendChild(img); return c;
  }
  function renderMembers() {
    var grid = $("#logoGrid");
    if (grid) MEMBERS.forEach(function (m) { grid.appendChild(buildCell(m)); });
    var track = $("#logoTrack"); // home carousel: duplicate the set for a seamless loop
    if (track) MEMBERS.concat(MEMBERS).forEach(function (m) { track.appendChild(buildCell(m)); });
  }

  function renderTimeline() {
    var home = $("#timeline"), full = $("#timeline-full");
    function fill(host, items) { items.forEach(function (it) { var i = el("div", "tl-item reveal"); i.innerHTML = '<span class="tl-year">' + it[0] + '</span><p>' + it[1] + '</p>'; host.appendChild(i); }); }
    if (home) fill(home, IMPACT.slice(0, 7));
    if (full) fill(full, IMPACT);
  }

  function renderNews() {
    var grid = $("#newsGrid"); if (!grid) return;
    NEWS.forEach(function (n, idx) {
      var card = el("a", "news-card reveal" + (idx % 2 ? " d1" : ""));
      card.href = "news-" + n[4] + ".html";
      var meta = '<span class="news-cat' + (n[0] === "Milestone" || n[0] === "Honors" ? " alt" : "") + '">' + n[0] + '</span>' + (n[1] ? '<span class="news-date">' + n[1] + '</span>' : '');
      card.innerHTML =
        '<div class="news-meta">' + meta + '</div>' +
        '<h3>' + n[2] + '</h3><p>' + n[3] + '</p>' +
        '<span class="more">Read the story <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>';
      grid.appendChild(card);
    });
  }

  function renderNotable() {
    var grid = $("#notableGrid"); if (!grid) return;
    NOTABLE.forEach(function (s) {
      var parts = s[1].split(/\s+/);
      var initials = (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
      var c = el("div", "notable reveal");
      c.innerHTML = '<div class="avatar">' + initials + '</div><span class="yr">' + s[0] + '</span><h4>' + s[1] + '</h4><p>' + s[2] + '</p>';
      grid.appendChild(c);
    });
  }

  function renderSpeakers() {
    var host = $("#speakerYears"); if (!host) return;
    SPEAKERS.forEach(function (yr, i) {
      var d = el("details", "spk-year"); d.setAttribute("name", "speakers"); if (i === 0) d.open = true;
      var names = yr[1].map(function (n) {
        var parts = n.split(" — ");
        return parts.length > 1 ? '<li><b>' + parts[0] + '</b><span>, ' + parts[1] + '</span></li>' : '<li><b>' + n + '</b></li>';
      }).join("");
      d.innerHTML =
        '<summary><span>' + yr[0] + '</span><span class="yc">' + yr[1].length + ' speakers</span>' +
        '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></summary>' +
        '<ul class="spk-names">' + names + '</ul>';
      host.appendChild(d);
    });
    // Single-open accordion (fallback for browsers without <details name>)
    host.addEventListener("toggle", function (e) {
      if (e.target.tagName === "DETAILS" && e.target.open) {
        $all("details[open]", host).forEach(function (o) { if (o !== e.target) o.open = false; });
      }
    }, true);
  }

  /* ---------- Photo galleries + lightbox ---------- */
  function renderGalleries() {
    var host = $("#galleries"); if (!host) return;
    var flat = []; // {gallery, src, idx}
    GALLERIES.forEach(function (g) {
      var key = g[0], title = g[1], tag = g[2], imgs = g[3];
      var block = el("div", "gallery-block reveal");
      var head = el("div", "gallery-head");
      head.innerHTML = '<h3>' + title + '</h3><span class="gtag">' + tag + '</span>';
      block.appendChild(head);
      var tg = el("div", "thumb-grid");
      imgs.forEach(function (file) {
        var src = "assets/photos/" + key + "/" + file;
        var gi = flat.length;
        flat.push(src);
        var b = el("button", "thumb"); b.type = "button"; b.setAttribute("data-i", gi); b.setAttribute("aria-label", "Open photo from " + title);
        b.innerHTML = '<img src="' + src + '" alt="' + title + ' — ' + tag + '" loading="lazy"><span class="zoom"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/></svg></span>';
        tg.appendChild(b);
      });
      block.appendChild(tg);
      host.appendChild(block);
    });
    buildLightbox(flat);
  }

  function buildLightbox(flat) {
    var lb = el("div", "lightbox"); lb.id = "lightbox";
    lb.innerHTML =
      '<button class="lb-close" aria-label="Close">&times;</button>' +
      '<button class="lb-nav prev" aria-label="Previous"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>' +
      '<img alt="">' +
      '<button class="lb-nav next" aria-label="Next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></button>' +
      '<div class="lb-count"></div>';
    document.body.appendChild(lb);
    var img = $("img", lb), count = $(".lb-count", lb), cur = 0;
    function show(i) { cur = (i + flat.length) % flat.length; img.src = flat[cur]; count.textContent = (cur + 1) + " / " + flat.length; }
    function open(i) { show(i); lb.classList.add("open"); document.body.style.overflow = "hidden"; }
    function close() { lb.classList.remove("open"); document.body.style.overflow = ""; }
    document.addEventListener("click", function (e) {
      var t = e.target.closest ? e.target.closest(".thumb") : null;
      if (t) { open(+t.getAttribute("data-i")); }
    });
    $(".lb-close", lb).addEventListener("click", close);
    $(".lb-nav.prev", lb).addEventListener("click", function () { show(cur - 1); });
    $(".lb-nav.next", lb).addEventListener("click", function () { show(cur + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(cur - 1);
      else if (e.key === "ArrowRight") show(cur + 1);
    });
  }

  /* ---------- Behaviors ---------- */
  function initNav() {
    var nav = $("#nav");
    if (nav) {
      var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 12); };
      onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    }
    var ham = $("#hamburger");
    if (ham) {
      ham.addEventListener("click", function () { var o = document.body.classList.toggle("menu-open"); ham.setAttribute("aria-expanded", o); });
      $all("#menu a").forEach(function (a) { a.addEventListener("click", function () { document.body.classList.remove("menu-open"); ham.setAttribute("aria-expanded", false); }); });
    }
  }

  function initReveal() {
    var els = $all(".reveal");
    if (!els.length || !("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  function initCount() {
    var nums = $all("[data-count],[data-text]"); if (!nums.length) return;
    function animate(e) {
      var txt = e.dataset.text;
      if (txt) { e.textContent = txt; return; }
      var target = +e.dataset.count, dur = 1400, start = performance.now(), ease = function (t) { return 1 - Math.pow(1 - t, 3); };
      function step(now) { var p = Math.min((now - start) / dur, 1); e.textContent = Math.floor(ease(p) * target); if (p < 1) requestAnimationFrame(step); else e.textContent = target; }
      requestAnimationFrame(step);
      setTimeout(function () { e.textContent = target; }, dur + 250); // backstop if rAF is throttled
    }
    if (!("IntersectionObserver" in window)) { nums.forEach(animate); return; }
    var io = new IntersectionObserver(function (entries) { entries.forEach(function (e) { if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); } }); }, { threshold: .6 });
    nums.forEach(function (e) { io.observe(e); });
  }

  function initForm() {
    var form = $("#contactForm"); if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = $("#formNote"), red = getComputedStyle(document.documentElement).getPropertyValue("--red");
      var ok = form.querySelectorAll("[required]");
      for (var i = 0; i < ok.length; i++) { if (!ok[i].value.trim()) { note.textContent = "Please complete the required fields."; note.style.color = red; return; } }
      form.querySelector('button[type="submit"]').textContent = "Thank you — message ready to send";
      note.textContent = "This is a demo form. Connect it to email or a form service to go live.";
      note.style.color = red;
    });
  }

  function initYear() { var y = $("#year"); if (y) y.textContent = new Date().getFullYear(); }

  /* ---------- Boot ---------- */
  function boot() {
    renderMembers();
    renderTimeline();
    renderNews();
    renderNotable();
    renderSpeakers();
    renderGalleries();
    initNav();
    initCount();
    initForm();
    initYear();
    initReveal(); // last, after dynamic content is in the DOM
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
