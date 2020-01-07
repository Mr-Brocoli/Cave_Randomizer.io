const EnemyNames = ["Pelplant", "Kochappy", "Chappy", "BluePom", "RedPom", "YellowPom", "BlackPom", "WhitePom", "RandPom",
"Kogane", "Wealthy", "Fart", "UjiA", "UjiB", "Tobi", "Armor", "Qurione", "Frog", "MaroFrog", "Rock", "Hiba", "GasHiba",
"ElecHiba", "Sarai", "Tank", "Wtank", "Catfish", "Tadpole", "ElecBug", "Mar", "Queen", "Baby", "Demon", "FireChappy",
"SnakeCrow", "KumaChappy", "Bomb", "Egg", "PanModoki", "id-39", "OoPanModoki", "Fuefuki", "BlueChappy", "YellowChappy",
"BlueKochappy", "YellowKochappy", "Tanpopo", "Clover", "HikariKinoko", "Ooinu_s", "Ooinu_l", "Wakame_s", "Wakame_l",
"KingChappy", "Miulin", "Hanachirashi", "Damagumo", "Kurage", "BombSarai", "FireOtakara", "WaterOtakara", "GasOtakara",
"ElecOtakara", "Jigumo", "id-64", "Imomushi", "Houdai", "LeafChappy", "TamagoMushi", "BigFoot", "SnakeWhole", "UmiMushi",
"OniKurage", "BigTreasure", "Stone", "Kabuto", "KumaKochappy", "ShijimiChou", "MiniHoudai", "Sokkuri", "Tukushi", "Watage",
"id-82(Pom)", "id-83(PanHouse)", "Hana", "DaiodoRed", "DaiodoGreen", "Magaret", "Nekojarashi", "Chiyogami", "Zenmai",
"KareOoinu_s", "KareOoinu_l", "BombOtakara", "DangoMushi", "Rkabuto", "Fkabuto", "FminiHoudai", "Tyre", "BlackMan",
"id-100(UmiMushiBase)", "UmiMushiBlind"];
// Enemies that use id-%d are the enemies that don't works
var TreasureList;

const LightFiles = ["bluefog00.ini", "chikahimi_metal_light_lv4.ini", "forest_2_siro_light.ini", "forest_3_light.ini", "hiroba_light.ini", "hiroba_toy_light_cha.ini", "houdai_light.ini", "jyoou_light_lv0.ini", "jyoou_light_lv1.ini", "jyoou_light_lv2.ini", "jyoou_light_lv3.ini", "jyoou_light_lv4_5.ini", "jyoou_light_lv6.ini", "key_light_lv0.ini", "key_light_lv1.ini", "king_light.ini", "kumomei_light_cha.ini", "kusachi_light_cha.ini", "kusachi_light_lv0.ini", "light.ini", "metal_light_cha.ini", "metal_light_lv0.ini", "metal_light_lv1.ini", "metal_light_lv2.ini", "metal_light_lv3.ini", "metal_light_lv4.ini", "muraon_light_lv0.ini", "muraon_light_lv1.ini", "muraon_light_lv2.ini", "muraon_light_lv3.ini", "muraon_light_lv4.ini", "normal_light_cha.ini", "normal_light_lv0.ini", "normal_light_lv1.ini", "normal_light_lv2.ini", "normal_light_lv3.ini", "normal_light_lv4.ini", "oootakara_light.ini", "qchap_light.ini", "sirohana_light_lv0.ini", "sirohana_light_lv1.ini", "sirohana_light_lv2.ini", "sirohana_light_lv3.ini", "sirohana_light_lv4.ini", "sirohana_light_lv5.ini", "sniper_light_lv0.ini", "suityu_light_lv0.ini", "suityu_light_lv1.ini", "suityu_light_lv2.ini", "suityu_light_lv3.ini", "suityu_light_lv4.ini", "toy_light_cha.ini", "toy_light_lv0.ini", "toy_light_lv1.ini", "toy_light_lv2.ini", "toy_light_lv3.ini", "toy_light_lv4.ini", "tutorial_1_light.ini", "vs_10_light.ini", "vs_2_light.ini", "vs_6_light.ini", "vs_7_light.ini", "vs_8_light.ini", "yakushima_2_light.ini", "yakushima_3_16x17r_light.ini"];

const UnitFiles = ["1_ABE_ari_metal.txt", "1_ABE_king_tsuchi.txt", "1_ABE_manp_boss_conc.txt", "1_ABE_mid1_boss_tsuchi.txt", "1_ABE_mid1_metal.txt", "1_ABE_mid1_tsuchi.txt", "1_ABE_vshit67_toy.txt", "1_MAT_cent2_tsuchi.txt", "1_MAT_danh_conc.txt", "1_MAT_h446_metal.txt", "1_MAT_hit224_cap_icap_metal.txt", "1_MAT_ike_kusachi.txt", "1_MAT_manp_2_conc.txt", "1_MAT_manp_conc.txt", "1_MAT_manq_2_conc.txt", "1_MAT_manq_conc.txt", "1_MAT_mid2_metal.txt", "1_MAT_mid2_tsuchi.txt", "1_MAT_north_boss_tsuchi.txt", "1_MAT_north_tsuchi.txt", "1_MAT_tower2_toy.txt", "1_MAT_vs_drypool_tile.txt", "1_MIYA_big_kusachi.txt", "1_MIYA_bunki_tile.txt", "1_MIYA_manh2_conc.txt", "1_MIYA_mid_toy.txt", "1_NARI_4x4b_conc.txt", "1_NARI_4x4c_conc.txt", "1_NARI_hit6x6_toy.txt", "1_NARI_hit6x7_toy.txt", "1_NARI_north4_tsuchi.txt", "1_NARI_ud_tile.txt", "1_units_5x5a_kusachi.txt", "1_units_a_conc.txt", "1_units_a_tile.txt", "1_units_big2_kusachi.txt", "1_units_boss_tsuchi.txt", "1_units_bunki_2_tile.txt", "1_units_bunki_tile.txt", "1_units_cent2_tsuchi.txt", "1_units_cent3_tsuchi.txt", "1_units_cent_tsuchi.txt", "1_units_dangomushi_tile.txt", "1_units_DKumo_conc.txt", "1_units_hit224_metal.txt", "1_units_hit6x6_yakushima_toy.txt", "1_units_houdai2_metal.txt", "1_units_houdai_metal.txt", "1_units_ike4_tsuchi.txt", "1_units_king_tsuchi.txt", "1_units_large_toy.txt", "1_units_manh_boss_conc.txt", "1_units_manh_conc.txt", "1_units_mid2_snow.txt", "1_units_mid2_tsuchi.txt", "1_units_mid_kusachi.txt", "1_units_nobo2_metal.txt", "1_units_nobo_metal.txt", "1_units_north_metal.txt", "1_units_north_snow.txt", "1_units_north_tutorial_snow.txt", "1_units_opan_toy.txt", "1_units_otakara_tile.txt", "1_units_purple_snow.txt", "1_units_queen_b_tsuchi.txt", "1_units_queen_c_tsuchi.txt", "1_units_sara_toy.txt", "1_units_snake_tsuchi.txt", "1_units_spiral_conc.txt", "1_units_torigoya_kusachi.txt", "1_units_tower2_toy.txt", "1_units_tower_toy.txt", "1_units_white_metal.txt", "1_unit_16x17r_conc.txt", "2_ABE_a_dry_tile.txt", "2_ABE_blk_cent2_tsuchi.txt", "2_ABE_blk_hit3_tsuchi.txt", "2_ABE_bunki_manp_tile.txt", "2_ABE_d_dry_tile.txt", "2_ABE_hit1_hit3_tsuchi.txt", "2_ABE_mid1_nor3_tsuchi.txt", "2_ABE_mid_big_kusachi.txt", "2_ABE_nobo2_nor22_metal.txt", "2_ABE_nor1_cen2_metal.txt", "2_ABE_nor1_hit43_metal.txt", "2_ABE_norhiba_blkhiba_tsuchi.txt", "2_ABE_north_snow_manh2.txt", "2_ABE_units_5x5a_mid_kusachi.txt", "2_MAT_5x5_mid_kusachi.txt", "2_MAT_ari_cent_metal.txt", "2_MAT_a_b_conc.txt", "2_MAT_a_m_conc.txt", "2_MAT_cent_mid2_tsuchi.txt", "2_MAT_cent_north_boss_tsuchi.txt", "2_MAT_cent_north_tsuchi.txt", "2_MAT_f_k_conc.txt", "2_MAT_h224_h443_tekiF_metal.txt", "2_MAT_h335_h447_metal.txt", "2_MAT_hit3_nor4_tsuchi.txt", "2_MAT_hit4_nor2_tsuchi.txt", "2_MAT_hit4_north_metal.txt", "2_MAT_kingA_kingB_tsuchi.txt", "2_MAT_manp_manq_conc.txt", "2_MAT_mid1_nor2_tsuchi.txt", "2_MAT_mid2_h443_tekiF_metal.txt", "2_MAT_sak1_sak2_snow.txt", "2_MAT_sak2_nor1_tsuchi.txt", "2_MAT_tak22_nor22_tile.txt", "2_NARI_hit3_nor3_tsuchi.txt", "2_NARI_hit4x7_small_toy.txt", "2_NARI_nor3_mid2_tsuchi.txt", "2_units_473_663_toy.txt", "2_units_5x5a_big_tekiF_kusachi.txt", "2_units_ari1_nor2_metal.txt", "2_units_ari_hit443_metal.txt", "2_units_ari_nobo_metal.txt", "2_units_blk1_nor4_tsuchi.txt", "2_units_cent_mid1_tsuchi.txt", "2_units_cent_mid2_tsuchi.txt", "2_units_cent_nor1_metal.txt", "2_units_cent_north_tsuchi.txt", "2_units_gw_l_conc.txt", "2_units_hit47_hit67_toy.txt", "2_units_ike2_hit1_tsuchi.txt", "2_units_ike2_ike3_snow.txt", "2_units_ike2_ike4_tsuchi.txt", "2_units_kingA_norhiba_tsuchi.txt", "2_units_mid1_nor22_metal.txt", "2_units_mid2_north_metal.txt", "2_units_mid2_north_snow.txt", "2_units_mid2_north_tsuchi.txt", "2_units_mid_ike_kusachi.txt", "2_units_northF_pool_tile.txt", "2_units_north_dry_tile.txt", "2_units_north_pool_tile.txt", "2_units_north_ud_tile.txt", "2_units_nor_tekiF_metal.txt", "2_units_Oashi_d_conc.txt", "2_units_Oashi_s_yuko_conc.txt", "2_units_pool_dry_tile.txt", "2_units_sara_sara2_toy.txt", "2_units_small2_mid2_toy.txt", "2_units_tak22_yuko_tile.txt", "2_units_tako_north_tile.txt", "2_units_ud_dry_tile.txt", "3_ABE_5X5a_ike_big_kusachi.txt", "3_ABE_5X5a_ike_mid_kusachi.txt", "3_ABE_blk_uzu1_mid2_tsuchi.txt", "3_ABE_b_f_g_conc.txt", "3_ABE_cent_4x4_mid1_metal.txt", "3_ABE_dpool_nor_ud_tile.txt", "3_ABE_d_pypen_dani_conc.txt", "3_ABE_hit3_ike1_blk1.txt", "3_ABE_mid1_blk1_nor3_tsuchi.txt", "3_ABE_mid2_hit34_hit43_metal.txt", "3_ABE_mid2_hit3_hit5_metal.txt", "3_ABE_mid2_hit446_hit344.txt", "3_ABE_mid2_norhiba_blkhiba_tsuchi.txt", "3_ABE_sak1_sak2_hit1_tsuchi.txt", "3_MAT_ari_h224_h443_tower_metal.txt", "3_MAT_ari_h446_h443_tower_metal.txt", "3_MAT_a_h_m_renga.txt", "3_MAT_cent_mid1_mid2_tsuchi.txt", "3_MAT_cnt2_nor3_uzu1_tsuchi.txt", "3_MAT_d_g_m_renga.txt", "3_MAT_d_i_m_conc.txt", "3_MAT_f_k_o_conc.txt", "3_MAT_hit2_blk1_nor3_tsuchi.txt", "3_MAT_hit2_blk1_nor4_tsuchi.txt", "3_MAT_hit2_hit3_blk1_snow.txt", "3_MAT_hit34_sak2_uzu1_snow.txt", "3_MAT_hit34_sak2_uzu1_tsuchi.txt", "3_MAT_hit47_hit66_hit67_toy.txt", "3_MAT_ike2_hit1_hit3_tsuchi.txt", "3_MAT_ike3_mid2_sak1_snow.txt", "3_MAT_mid1_mid2_uzu1_snow.txt", "3_MAT_nor4_hit2_blk1_snow.txt", "3_MAT_nor4_ike1_ike2_tsuchi.txt", "3_units_ari_hit446_447metal.txt", "3_units_a_d_north_tile.txt", "3_units_a_l_yuko_tile.txt", "3_units_cent_cent2_north_tsuchi.txt", "3_units_cent_h235_tower_metal.txt", "3_units_cent_mid2_north_tsuchi.txt", "3_units_d_f_ujikou_tile.txt", "3_units_f_g_l_conc.txt", "3_units_f_g_m_conc.txt", "3_units_f_k_pypes_conc.txt", "3_units_f_l_o_conc.txt", "3_units_f_m_bomb_conc.txt", "3_units_h335_h344_tekiF_metal.txt", "3_units_h_k_pypes_conc.txt", "3_units_mid1_hit1_ike2_tsuchi.txt", "3_units_mid2_hit6_hit7_metal.txt", "3_units_north_ike2_hitode_tsuchi.txt", "3_units_north_mid1_mid2_tsuchi.txt", "3_units_north_ud_pool_tile.txt", "3_units_pool_nor_ujikou_tile.txt", "3_units_small2_small_mid_toy.txt", "3_units_small_mid_large_toy.txt", "4_ABE_a_b_c_dani_conc.txt", "4_ABE_a_b_e_m_conc.txt", "4_ABE_d_pypeo_pypen_dani_conc.txt", "4_ABE_hit6x6_hit4x7_mid8_sml5_toy.txt", "4_ABE_ike1_ike2_blk1_cnt_tsuchi.txt", "4_ABE_mid1_h443_h447_h335_metal.txt", "4_MAT_c_d_k_n_conc.txt", "4_MAT_hit4_nor4_ike2_blk1_tsuchi.txt", "4_MAT_mid1_mid2_ike1_ike3_tsuchi.txt", "4_MAT_mid1_mid2_sak2_uzu1_snow.txt", "4_MAT_mid2_nor4_ike1_sak2_tsuchi.txt", "4_MAT_nor3_mid1_hit3_sak1_tsuchi.txt", "4_MAT_nor3_nor4_ike2_blk1_tsuchi.txt", "4_MAT_nor4_hit4_ike2_blk1_tsuchi.txt", "4_MAT_sak2_cen1_blk1_nor4_tsuchi.txt", "4_NARI_4x4eg_hitm_manp_conc.txt", "4_NARI_all_hitode.txt", "4_NARI_danh_norjk_pypn_conc.txt", "4_units_a_b_c_d_conc.txt", "4_units_a_d_e_h_conc.txt", "4_units_a_d_f_l_tile.txt", "4_units_a_g_l_m_conc.txt", "4_units_b_f_g_h_conc.txt", "4_units_cent_north_mid1_mid2_tsuchi.txt", "4_units_c_e_j_l_conc.txt", "4_units_c_j_k_l_conc.txt", "4_units_c_l_n_o_conc.txt", "4_units_d_j_n_o_conc.txt", "4_units_f_g_h_l_conc.txt", "4_units_f_g_i_spiral_conc.txt", "4_units_mid1_blk1_sak2_uzu1_tsuchi.txt", "4_units_mid1_cent_hit3_hit4_metal.txt", "4_units_mid1_mid2_hit1_sak1_tsuchi.txt", "4_units_mid2_north_hit3_hit5_metal.txt", "4_units_nobo_hit224_235_344_metal.txt", "4_units_north_ud_pool_dry_tile.txt", "4_units_sak1_ike2_blk1_nor4_tsuchi.txt", "5_ABE_a_b_c_f_dani_conc.txt", "5_ABE_a_d_g_h_j_conc.txt", "5_ABE_nor3_hit1_sak1_blk1_mid2_tsuchi.txt", "5_NARI_nor1_nor2_nor3_hit1_hit2_tsuchi.txt", "5_NARI_sak1_sak2_nor1_uzu_hit1_tsuchi.txt", "5_units_hit2_hit3_hit4_nor2_nor3_tsuchi.txt", "5_units_mid1_ari1_hit5_hit3_cent_metal.txt", "5_units_mid2_cent_hit4_hit5_nor2_metal.txt", "5_units_pype_conc.txt", "6_ABE_a_d_g_h_j_o_conc.txt", "7_ABE_b_c_f_g_i_l_pypn_conc.txt", "all_MAT_4x4_conc.txt", "all_NARI-ike-north_tsuchi.txt", "all_units.txt", "all_units_conc.txt", "all_units_hitode_toy.txt", "all_units_kusachi.txt", "all_units_metal.txt", "all_units_renga.txt", "all_units_snow.txt", "all_units_tile.txt", "all_units_toy.txt", "all_units_tsuchi.txt", "all_units_water-ike4.txt", "all_units_water_tsuchi.txt", "E3_units_metal.txt", "E3_units_tsuchi.txt", "units.txt", "units_tekitest.txt", "units_test.txt", "units_test_conc.txt", "units_test_metal.txt", "units_test_snow.txt", "units_test_tsuchi.txt", "units_test_tsuchi_conc.txt", "vs_10_test_tile.txt", "vs_1_tsuchi.txt", "vs_2_snow.txt", "vs_3_toy.txt", "vs_4_metal.txt", "vs_5_conc.txt", "vs_6_nobo_metal.txt", "vs_7_kusachi.txt", "vs_8_spiral_conc.txt", "vs_9_tsuchi.txt"];

// check SetDefaultSettings for these things
      /*                 0x02, 0x48, 0x54, 0x2a, 0x26, 0x22, 0x02, 0x2b, 0x3a, 0x4b, 0x60, 0x5f, 0x20, 0x29, 0x26, 0x65,
             0x38, 0x53, 0x22, 0x61, 0x2a, 0x4e, 0x28, 0x38, 0x53, 0x22, 0x61, 0x2a, 0x4e, 0x28, 0x61, 0x22,
                       35, 35, 35, 35, 35, 35, 35, 35, 33, 33, 33, 33, 33, 33, 33, 33]; */

class Teki {
  constructor(Name, Weight, Spawn) {
    this.Name = Name;
    this.Weight = Weight;
    this.Spawn = Spawn;
  }
}
class Item {
  constructor(Name, Weight) {
    this.Name = Name;
    this.Weight = Weight;
  }
}
class Gate {
  constructor(Health, Weight) {
    this.Health = Health;
    this.Weight = Weight; // gate's weight is different
  }
}
class Cap {
  constructor(AnyName, Weight) {
    this.AnyName = AnyName;
    this.Weight = Weight;
  }
}
class TreasureInfo {
  constructor(Name, CarryMin, Poko, IsBuried) {
    this.Name = Name;
    this.CarryMin = CarryMin;
    this.Poko = Poko;
    this.IsBuried = IsBuried;
  }
}
var unitnum = 0;
function CreateCheckBoxCaveUnits() {
    RemoveAllLabels("checkboxes"); //REMOVES ALL LABLES!!
    document.getElementById("Display Select").innerHTML = "Blacklisted/Non Blackisted Cave Units"
    unitnum = 0;
    var div = document.getElementById('checkboxes');
    while(unitnum != UnitFiles.length)
    {
      var ToCreate = UnitFiles[unitnum];
      unitnum++; // this increases the unit num by 1!
      var input = document.createElement('input');
      var label = document.createElement('label');
      input.type = "checkbox";
      input.checked = true;
      label.appendChild(input);
      label.appendChild( document.createTextNode(ToCreate) );
      label.id = "checkboxlabel-" + unitnum.toString();
      label.name = ToCreate;
      input.id = "checkboxinput-" + unitnum.toString();
      div.appendChild(label);
      }
}
function InputNumberLimit(e)
{
  //Separate the percent sign from the number:
  var int = e.target.value;
  var int_max = parseInt(e.target.max);
  if(int > int_max) {
    e.target.value = e.target.max;
  }
  var int_min = parseInt(e.target.min);
  if(int < int_min)
  {
    if(int_min <= 9)
    {
    e.target.value = '';
  } else {
    e.target.value = e.target.min;
  }
  }
}

function ReturnEnemyName(EnemyStrength) {
  var EnemyTable;
  switch(EnemyStrength)
  {
    case 0: EnemyTable = JSON.parse(localStorage["EasyEnemies"]); break;
    case 1: EnemyTable = JSON.parse(localStorage["MediumEnemies"]); break;
    case 2: EnemyTable = JSON.parse(localStorage["HardEnemies"]);  break;
    default: return "Error"; break;
  }
  var EnemyName = Math.floor((Math.random() * EnemyTable.length) + 0); // makes EnemyName a random int
  EnemyName = EnemyTable[EnemyName]; // Enemy Name becomes the id of an enemy from the decided enemy table
  EnemyName = EnemyNames[EnemyName]; // convert Enemy Id to string
  return EnemyName;
}

function ResetEnemyWeight() {
  NormalEnemyWeight = 20; // spawn weight for normal enemies
  NormalEnemyStrength = 0; // starting stentgh of normal enemies
  HardEnemyWeight = 20; // starting weight of hard enemies
  HardEnemyStrength = 1; // starting strength of hard enemies
  HibaWeight = 0; // starting hiba weight
}
function IncreaseEnemyWeight() {
  NormalEnemyWeight += 20;
  if (NormalEnemyWeight >= 180) {
    NormalEnemyWeight = 60;
    NormalEnemyStrength += 1;
  }
  HardEnemyWeight += 10;
  if (HardEnemyWeight >= 50) {
    HardEnemyWeight = 10;
    HardEnemyStrength += 1;
  }
  HibaWeight += 10;
}

function SetTekiItemGateCapInfoNormal() {
    TekiInfo = [];
    ItemInfo = [];
    var NormalEnemy = new Teki("", NormalEnemyWeight, 0); // spawn type 0
    NormalEnemy.Name = ReturnEnemyName(NormalEnemyStrength);

    var KeyEnemy = new Teki("", 10, 1); // weight of 1 enemy spawn type 1
    KeyEnemy.Name = ReturnEnemyName(HardEnemyStrength);
    KeyEnemy.Name += "_key"; // give the enemy da key

    var HardEnemy = new Teki("", HardEnemyWeight, 1); // weight of 1 enemy spawn type 1
    HardEnemy.Name = ReturnEnemyName(HardEnemyStrength);

    var TreasureList = JSON.parse(localStorage["Treasures"]);
    if(TreasureList.length == 0){
      TreasureList = JSON.parse(TreasureListDefault);
      console.log("USING AND SETTING DEFAULT TREASURE LIST!");
      localStorage.setItem("Treasures", JSON.stringify(TreasureList));
    }
    var i = 0;
    localStorage.ItemNum = 8;
    while(i < localStorage.ItemNum) {
      while(i < localStorage.ItemNum) {
      var rand = Math.floor((Math.random() * TreasureList.length) + 0);
      var Treasure = TreasureList[rand];
      if(Treasure.Name == "key")
      {
        console.log("Not using Key!");
        break;
      }
      ItemInfo.push(Treasure.Name);
      i++;
   }
  }
    TekiInfo.push(NormalEnemy);
    TekiInfo.push(KeyEnemy);
    TekiInfo.push(HardEnemy);
}

function RemoveAllLabels(ElementId) {
  document.getElementById(ElementId).innerHTML = '\n'; // idk what this does but it works
}

function ReturnRandomCaveString() {
  if(unitnum == 0)
  {
         console.log("Click \"Choose file\" first!");
         return "units.txt";
  }
  var functionlock = 0;
  while(true)
  {
  var randomUnit = Math.floor((Math.random() * unitnum) + 1);
  var input = document.getElementById("checkboxinput-" + randomUnit.toString());
  if(input.checked == true)
     {
       break;
     }
  if(functionlock >= 10000) {console.log("failed to get Cave Unit"); return "units.txt"}
  functionlock++;
  }
  var label = document.getElementById("checkboxlabel-" + randomUnit.toString());
  return label.name;
}
var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}

function SaveSettings() {
  checkbox = document.getElementById("UseGatesCheckBox");
  if(checkbox.checked == true)
  {
    localStorage.UseGates = true;
  }
  else
    {
    localStorage.UseGates = false;
    }
  // console.log("UseGates is: " + localStorage.UseGates);
}

function IsUseDefaultSettings() {
  if (typeof(Storage) == "undefined")
  {
    console.log("Storage is not supported on this browser!");
    alert("Local Storage is not supported on this browser!");
    return;
  }
   console.log("HasVisitedBefore is: " + localStorage.HasVisitedBefore);
   if(localStorage.HasVisitedBefore != "true")
   {
     localStorage.HasVisitedBefore = true;
     SetDefaultSettings();
   }
}

function RadioTest() {
  console.log(document.querySelector('input[name="genderS"]:checked').value);
}

function SetDefaultSettings()
{
console.log("RESETTING SETTINGS!");
// no boss floor or rest floor variant, just pure stats
localStorage.UseGates = true;
localStorage.HasCapInfo = 1;
localStorage.HasSeeSaw = 0; // setting to 0 makes it not
localStorage.HasSeeSawStart = 0; // setting to 0 makes it no
localStorage.HasSeeSawMin = 0; // setting to 0 makes it not
localStorage.HasSeeSawMax = 0; // setting to 0 makes it not
localStorage.UnitName = "units.txt";
localStorage.LightName = "light.ini";
localStorage.SkyBox = "test";
localStorage.CaveInfo = "";
localStorage.FloorNum;
localStorage.FloorType = 0;
localStorage.MusicType = 0;
localStorage.HasSolidPlane = 0;
localStorage.BlackManTime = 0.0000000;
localStorage.BlackManTimeStartHealth = 300.000000;
localStorage.BlackManTimeHealth = 0.0000000;
localStorage.BlackManTimeOverFlow = 0.0000000;
localStorage.CorridorFloat = 0.0100000;
localStorage.CorridorFloatMin = 0.0100000;
localStorage.CorridorFloatMax = 0.0100000;
// normal floors
localStorage.MainNum = 100;
localStorage.ItemNum = 100;
localStorage.ItemNumMin = 100;
localStorage.ItemNumMax = 100;
localStorage.GateNum = 100;
localStorage.GateNumHealth = 100;
localStorage.GateNumOverFlow = 100;
localStorage.RoomNum = 3;
localStorage.RoomNumMin = 3;
localStorage.RoomNumMax
localStorage.HasGeyser = 0;
localStorage.HasGeyserMin = 0;
localStorage.HasGeyserMax = 0;
localStorage.HasClog = 0;
localStorage.HasClogMin = 0;
localStorage.HasClogMax = 0;
localStorage.CapProbability = 50;
// non normal floors
localStorage.NONNORM_MainNum = 100;
localStorage.NONNORM_ItemNum = 0;
localStorage.NONNORM_GateNum = 100;
localStorage.NONNORM_GateNumMin = 100;
localStorage.NONNORM_GateNumMax = 100;
localStorage.NONNORM_RoomNum = 3;
localStorage.NONNORM_RoomNumMin = 3;
localStorage.NONNORM_RoomNumMax
localStorage.NONNORM_HasGeyser = 0;
localStorage.NONNORM_HasGeyserMin = 0;
localStorage.NONNORM_HasGeyserMax = 0;
localStorage.NONNORM_HasClog = 0;
localStorage.NONNORM_HasClogMin = 0;
localStorage.NONNORM_HasClogMax = 0;
localStorage.NONNORM_CapProbability = 50;
EasyEnemies =  [0x01, 0x0c, 0x2d, 0x44, 0x4f, 0x01, 0x2d, 0x1b, 0x01, 0x0c, 0x0c, 0x44, 0x4f, 0x01, 0x2d, 0x1b];
MediumEnemies = [0x0d, 0x0e, 0x0f, 0x1a, 0x1f, 0x36, 0x18, 0x2c, 0x39, 0x4c, 0x1c, 0x18, 0x3f, 0x0f, 0x1c, 0x3f];
HardEnemies = [0x02, 0x48, 0x54, 0x11, 0x12, 0x18, 0x19, 0x2b, 0x3a, 0x4b, 0x60, 0x5f, 0x20, 0x29, 0x02, 0x65];
ReallyHardEnemies = [0x38, 0x53, 0x22, 0x61, 0x2a, 0x4e, 0x28, 0x38, 0x53, 0x22, 0x61, 0x2a, 0x4e, 0x28, 0x61, 0x22];
localStorage.setItem("EasyEnemies", JSON.stringify(EasyEnemies));
localStorage.setItem("MediumEnemies", JSON.stringify(MediumEnemies));
localStorage.setItem("HardEnemies", JSON.stringify(HardEnemies));
localStorage.setItem("HardEnemies", JSON.stringify(ReallyHardEnemies));

console.log("USING AND SETTING DEFAULT TREASURE LIST!");
    Treasures = JSON.parse(TreasureListDefault);
    localStorage.setItem("Treasures", JSON.stringify(Treasures));
}


var TekiInfo = [];
var ItemInfo = [];
var GateInfo = [];
var CapInfo = [];
var NormalEnemyWeight = 20; // spawn weight for normal enemies
var NormalEnemyStrength = 0; // starting stentgh of normal enemies
var HardEnemyWeight = 20; // starting weight of hard enemies
var HardEnemyStrength = 1; // starting strength of hard enemies
var HibaWeight = 0; // starting hiba weight

function SetCaveParmsNormal() {
  SetTekiItemGateCapInfoNormal();
  localStorage.FloorNum = document.getElementById("UserInputFloorNum").value;
  localStorage.FloorNum = parseInt(localStorage.FloorNum);
  localStorage.FloorNum = Math.trunc( localStorage.FloorNum );
  localStorage.UnitName = ReturnRandomCaveString();
  var ChooseLightFile = Math.floor((Math.random() * LightFiles.length) + 0);
  localStorage.LightName = LightFiles[ChooseLightFile];
}

function MakeCaveInfo() {
    if(document.getElementById("UserInputFloorNum").value <= 0 || document.getElementById("UserInputFloorNum").value > 1000) {
    return;
    }
    SetCaveInfoTop();
    ResetEnemyWeight(); // reset enemy weight for the start of a new cave
    for(var CurrFloor = 0; CurrFloor != localStorage.FloorNum; CurrFloor++)
    {
      SetCaveParmsNormal();
      AddCaveFloor(CurrFloor);
      IncreaseEnemyWeight(); // increase enemy weight for the new floors
    }
    document.getElementById("DisplayCaveInfo").innerHTML = CaveInfo;
}

function SetCaveInfoTop() {
   // resets CaveInfo
   FloorNum = document.getElementById("UserInputFloorNum").value;
   FloorNum = parseInt(FloorNum);
   FloorNum = Math.trunc( FloorNum );
   CaveInfo = "# CaveInfo <br>{<br>	{c000} 4 "+ FloorNum + " 	# ŠK‘w<br>	{_eof} <br>}<br>" + FloorNum + " ";
}

function AddCaveFloor(CurrFloor) {
 CaveInfo += "# FloorInfo<br>{<br>"
 + "	{f000} 4 " + CurrFloor + "<br>" // curr floor
 + "	{f001} 4 " + CurrFloor + "<br>" // also curr floor
 + "	{f002} 4 " + localStorage.MainNum + "<br>" // main category
 + "	{f003} 4 " + localStorage.ItemNum + "<br>" // treasure category
 + "	{f004} 4 " + localStorage.GateNum + "<br>" // gate category
 + "	{f005} 4 " + localStorage.RoomNum + "<br>" // room count
 + "	{f006} 4 " + localStorage.CorridorFloat + "<br>" // corridor ratio
 + "	{f007} 4 " + localStorage.HasGeyser + "<br>" // has geyser
 + "	{f008} -1 " + localStorage.UnitName + "<br>" // unit
 + "	{f009} -1 " + localStorage.LightName + "<br>" // lighting
 + "	{f00A} -1 " + localStorage.SkyBox + "<br>" // SkyBox
 + "	{f010} 4 " + localStorage.HasClog + "<br>" // is hole clogged
 + "	{f011} 4 " + localStorage.FloorType + "<br>" // The Echo Strength That I discovered :)
 + "	{f012} 4 " + localStorage.MusicType + "<br>" // 0 for normal music, 1 for bosses, 2 for rest floors
 + "	{f013} 4 " + localStorage.HasSolidPlane + "<br>" // 0 for no plane, 1 for yes plane
 + "	{f014} 4 " + localStorage.CapProbability + "<br>" // idk this one
 + "	{f015} 4 " + localStorage.HasCapInfo + "<br>" // 1 to use capinfo 0 for no capinfo
 + "	{f016} 4 " + localStorage.BlackManTime + "<br>" // black epople are evil
 + "	{f017} 4 " + localStorage.HasSeeSaw + "<br>" // see saw funny moments
 + "	{_eof}<br>}<br>"; // end the basic floor info
 AddTekiInfo();
 AddItemInfo();
 AddGateInfo();
//  if(HasCapInfo == 1) {AddCapInfo();}
}

function AddTekiInfo() {
 CaveInfo += "# TekiInfo<br>{<br>"
 CaveInfo += "	" + TekiInfo.length + "<br>"; // set the number of enemy's to choose from
 for(var i = 0; i != TekiInfo.length; i++)
 {
   CaveInfo += "	" + TekiInfo[i].Name + "	" + TekiInfo[i].Weight + "<br>" + "	" + TekiInfo[i].Spawn + "<br>";
 }
 CaveInfo += "}<br>";
}

function AddItemInfo() {
 CaveInfo += "# ItemInfo<br>{<br>"
 CaveInfo += "	" + ItemInfo.length + "<br>"; // set the number of enemy's to choose from
 for(var i = 0; i != ItemInfo.length; i++)
 {
   CaveInfo += "	" + ItemInfo[i] + "	" + "10" + "<br>";
 }
 CaveInfo += "}<br>";
}

function AddGateInfo() {
 CaveInfo += "# GateInfo<br>{<br>"

 if(localStorage.UseGates == "false")
 {
   CaveInfo += "	" + 0 + "<br>";
   CaveInfo += "}<br>";
   return;
 }
 CaveInfo += "	" + TekiInfo.length + "<br>"; // set the number of enemy's to choose from
 for(var i = 0; i != TekiInfo.length; i++)
 {
   CaveInfo += "	" + TekiInfo[i].Name + "	" + TekiInfo[i].Weight + "<br>" + "	" + TekiInfo[i].Spawn + "<br>";
 }
 CaveInfo += "}<br>";
}
