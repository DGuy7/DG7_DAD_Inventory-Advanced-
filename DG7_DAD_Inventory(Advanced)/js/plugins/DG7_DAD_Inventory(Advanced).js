//=============================================================================
// DG7_DAD_Inventory.js
//=============================================================================

var Imported = Imported || {};
Imported.DG7_DAD_Inventory = true;

var DG7 = DG7 || {};                  
DG7.DADI = DG7.DADI || {};        

/*:
 * @plugindesc Этот пиздец добавляет инвентарю механику драг энд дропа.
 * @author DGuy7 он же Мартынов ДиГай Семеныч
 *
 * @help 
 * [RU]
 * тут написан хелп но мне никто не поможет я сам обрек себя на страдания 
 * занимаясь джавасриптом
 * Хотя бля я же уже ассемблер трогал
 * Извините зря быканул
 *
 * Описывать работу плагина в этом блокноте я не хочу
 * Ссылка на инструкцию: https://docs.google.com/document/d/1s2lHSGirV-26kVRkAjFIGSdf_1GTWT0f6mfPuo5SCbI/edit?usp=sharing
 * 
 * [EN]
 * there is help written but nobody will help me i doomed to suffering myself
 * using java script
 * but i worked with assembler
 * oh shit im sorry
 * 
 * I dont want to describe plugin here 
 * Link to Instruction manual: https://docs.google.com/document/d/1pG-pQ0JNStq-0usndArmK5pFRFBahxJAfl2ACtcDhM8/edit
 *  
 * @param Multibags
 * @type select
 * @option true
 * @option false
 * @default false
 * 
 * @param Default module
 * @type note
 * @desc Type here id of default module
 * 
 * @param Cell size
 * @type number
 * @desc 
 * @default 32
 * 
 * @param Equipment icons
 * @type number[]
 * @desc 
 * @default [0,0,0,0,0]
 * 
 * @param Item choose variable
 * @type number
 * @desc 
 * @default 1
 * 
 * @param Weapon choose variable
 * @type number
 * @desc 
 * @default 2
 * 
 * @param Armor choose variable
 * @type number
 * @desc 
 * @default 3
 * 
 * @param Empty text
 * @type text
 * @desc 
 * @default [ Пусто ]
 * 
 * @param Total text
 * @type text
 * @desc 
 * @default Итог:
 * 
 * @param List of complex grids
 * @type struct<ComplexGrid>[]
 * @desc Type here grids for inventories !!!ATTENTION READ THE MANUAL!!!
 * 
 * @param List of presets for inventory setting
 * @type struct<ItemSetPresets>[]
 * @desc Type here presets for inventory setting !!!ATTENTION READ THE MANUAL!!!
 * 
 * @param List of presets for loot
 * @type struct<LootPresets>[]
 * @desc Type here presets for loot !!!ATTENTION READ THE MANUAL!!!
 * 
 * @param List of modules
 * @type struct<InvModule>[]
 * @desc Type here inventory modules !!!ATTENTION READ THE MANUAL!!!
 * 
 */

 /*~struct~ComplexGrid:
 * 
 * @param id
 * @type note
 * @desc Unique grid identifier
 * 
 * @param cells
 * @type struct<GridCells>[]
 * @desc List of grid cells
 * @default 
 * 
 */ 

  /*~struct~GridCells:
 * 
 * @param id
 * @type note
 * @desc Unique cell identifier
 * 
 * @param column
 * @type number
 * @desc X position of cell in cells
 * @default 0
 * 
 * @param row
 * @type number
 * @desc Y position of cell in cells
 * @default 0
 * 
 * @param jointL
 * @type note
 * @desc Type here id of cell that connected to this cell on left side or null if there is no cell
 * @default null
 * 
 * @param jointR
 * @type note
 * @desc Type here id of cell that connected to this cell on right side or null if there is no cell
 * @default null
 * 
 * @param jointU
 * @type note
 * @desc Type here id of cell that connected to this cell on top or null if there is no cell
 * @default null
 * 
 * @param jointD
 * @type note
 * @desc Type here id of cell that connected to this cell at the bottom side or null if there is no cell
 * @default null
 * 
 * @param sprite
 * @type number
 * @desc Sprite number from inventorycells.png
 * @default 0
 * 
 * @param inputlogic
 * @type note
 * @desc type here a js code for filtrating items that enter in cell
 * 
 * @param outputlogic
 * @type note
 * @desc type here a js code for filtrating items that exit from cell
 * 
 * @param ItemOkInvLogic
 * @type note
 * @desc type here an additional js code that will be perform in inventory before item effect
 * 
 * @param ItemOkBattleLogic
 * @type note
 * @desc type here an additional js code that will be perform in battle before item effect
 * 
 * @param ItemUsableInvLogic
 * @type note
 * @desc type here a js code for regulation item usability in this cell in inventory
 * 
 * @param ItemUsableBattleLogic
 * @type note
 * @desc type here a js code for regulation item usability in this cell in battle
 * 
 */ 

/*~struct~LootPresets:
 *
 * @param id
 * @type note
 * @desc Unique id of preset
 * 
 * @param items
 * @type struct<ItemsForBattles>[]
 * @desc List of the items of preset
 * 
 */

/*~struct~ItemSetPresets:
 *
 * @param id
 * @type note
 * @desc Unique id of preset
 * 
 * @param items
 * @type struct<Items>[]
 * @desc List of the items of preset
 * 
 */

/*~struct~Items:
 *
 * @param itemtype
 * @type select
 * @option item
 * @option weapon
 * @option armor
 * @desc Item, weapon or armor
 * @default item
 * 
 * @param dataid
 * @type number
 * @desc Id of item in database list
 * 
 * @param maincell
 * @type note
 * @desc Type here id of main cell where item is located
 * 
 * @param direction
 * @type select
 * @option up
 * @option right
 * @option down
 * @option left
 * @desc Up, down, right or left all sprites is directed on up
 * @default up
 * 
 */

/*~struct~ItemsForBattles:
 *
 * @param itemtype
 * @type select
 * @option item
 * @option weapon
 * @option armor
 * @desc Item, weapon or armor
 * @default item
 * 
 * @param dataid
 * @type number
 * @desc Id of item in database list
 * 
 * @param maincell
 * @type number
 * @desc Type here id of main cell where item is located
 * 
 * @param direction
 * @type note
 * @desc Up, down, right or left all sprites is directed on up
 * @default up
 * 
 * @param chance
 * @type number
 * @desc Chance of drop from 0 to 1
 * @min 0
 * @max 1
 * @decimals
 * @default 1
 * 
 */

  /*~struct~InvModule:
 * 
 * @param id
 * @type note
 * @desc Unique id of module
 *
 * @param ModGridmode
 * @type select
 * @option Simplex
 * @option Complex
 * @desc Type of grid for module
 * @default Simplex
 * 
 * @param Width
 * @type number
 * @desc Width of grid in cells
 * @default 1
 * 
 * @param Height
 * @type number
 * @desc Height of grid in cells
 * @default 1
 * 
 * @param x
 * @type number
 * @desc X position of grid
 * @default 0
 * 
 * @param y
 * @type number
 * @desc Y position of grid
 * @default 0
 * 
 * @param ComplexGridId
 * @type note
 * @desc Complex grid if complex grid was choosed
 * @default "0"
 * @parent Grid mode
 * 
 * @param maket
 * @type file
 * @dir img/DAD
 * @require 1
 * @desc Image of maket for grid
 * @default
 * 
 * @param maketShiftX
 * @type number
 * @desc Image of maket for grid
 * @default 0
 * 
 * @param maketShiftY
 * @type number
 * @desc Image of maket for grid
 * @default 0
 * 
 */ 


(function() {

  toNumber = function (str, def) {
    return isNaN(str) ? def : +(str || def);
  }

  var parameters = PluginManager.parameters('DG7_DAD_Inventory(Advanced)');

  var multibags = parameters['Multibags'];
  var gridmode = null
  var simplexparam = null
  var defmodule = JSON.parse(parameters['Default module']);
  var complexid = null
  var cellsize = toNumber(parameters['Cell size'],32);
  var eicons = JSON.parse(parameters['Equipment icons']);
  var itemchoose = toNumber(parameters['Item choose variable'],1);
  var weaponchoose = toNumber(parameters['Weapon choose variable'],2);
  var armorchoose = toNumber(parameters['Armor choose variable'],3);
  var emptytext = parameters['Empty text'];
  var totaltext = parameters['Total text'];
  $dataDADComplexGrids = JSON.parse(parameters['List of complex grids']);
  $dataDADItemSetPresets = JSON.parse(parameters['List of presets for inventory setting']);
  $dataDADLootPresets = JSON.parse(parameters['List of presets for loot']);
  $dataDADModules = JSON.parse(parameters['List of modules']);
  for (var i=0;i<$dataDADComplexGrids.length;i++)
  {
    $dataDADComplexGrids[i] = JSON.parse($dataDADComplexGrids[i]);
    $dataDADComplexGrids[i].cells = JSON.parse($dataDADComplexGrids[i].cells);
    for (var j=0;j<$dataDADComplexGrids[i].cells.length;j++)
    {
      $dataDADComplexGrids[i].cells[j] = JSON.parse($dataDADComplexGrids[i].cells[j]);
    }
  }
  for (var i=0;i<$dataDADItemSetPresets.length;i++)
  {
    $dataDADItemSetPresets[i] = JSON.parse($dataDADItemSetPresets[i]);
    $dataDADItemSetPresets[i].items = JSON.parse($dataDADItemSetPresets[i].items);
    for (var j=0;j<$dataDADItemSetPresets[i].items.length;j++)
    {
      $dataDADItemSetPresets[i].items[j] = JSON.parse($dataDADItemSetPresets[i].items[j]);
    }
  }
  for (var i=0;i<$dataDADLootPresets.length;i++)
  {
    $dataDADLootPresets[i] = JSON.parse($dataDADLootPresets[i]);
    $dataDADLootPresets[i].items = JSON.parse($dataDADLootPresets[i].items);
    for (var j=0;j<$dataDADLootPresets[i].items.length;j++)
    {
      $dataDADLootPresets[i].items[j] = JSON.parse($dataDADLootPresets[i].items[j]);
    }
  }
  for (var i=0;i<$dataDADModules.length;i++)
  {
    $dataDADModules[i] = JSON.parse($dataDADModules[i]);
  }

  DADPlugInfo = {multibags: multibags, gridid: defmodule, cellsize: cellsize, eicons: eicons, itemchoose: itemchoose, weaponchoose: weaponchoose, armorchoose: armorchoose, emptytext: emptytext, total: totaltext}

  alreadytake = false
  currentchest = null
  currentloot = null

// ============================================
//
//                  OBJECT CLASSES
//
// ============================================



  class DADChest {
  constructor (id, cells, x, y, maket, sx, sy) {
    this.id = id
    this.cells = [cells]
    this.x = x
    this.y = y
    this.maket = maket
    this.sx = sx
    this.sy = sy
    this.items = [[]]
  }
}

function DADCell()
{
    this.initialize.apply(this, arguments)
}

DADCell.prototype = Object.create(Sprite.prototype)
DADCell.prototype.constructor = DADCell

DADCell.prototype.initialize = function (id, sprite, winancorx, winancory){
  this.winancorx = winancorx
  this.winancory = winancory
  this.sprite = sprite
  bitmap = ImageManager.loadBitmap("img/DAD/", "inventorycells",0,true)
  Sprite.prototype.initialize.call(this, bitmap)
  this.setFrame(DADPlugInfo.cellsize * (sprite%16), DADPlugInfo.cellsize * Math.floor(sprite/16), DADPlugInfo.cellsize, DADPlugInfo.cellsize);
  this.id = id
  this.item = null
  this.ismaincell = false
}

DADCell.prototype.isCursorOnItem = function ()
{
  x = TouchInput.x - this.x - this.winancorx
  y = TouchInput.y - this.y - this.winancory
  if (x < this.width && x>0 && y<this.height && y > 0 && alreadytake == false)
  {
    return true
  }
}




DADItem = function()
{
    this.initialize.apply(this, arguments)
}

DADItem.prototype = Object.create(Sprite.prototype)
DADItem.prototype.constructor = DADItem

DADItem.prototype.initialize = function (itemtype, dataid, maincell, direction, x, y, bitmap, container, dadmodule, winancorx, winancory, locked){
    this.firstclick = false
    this.cheking = true
    bitmap = ImageManager.loadBitmap("img/DAD/",bitmap,0,true)
    Sprite.prototype.initialize.call(this, bitmap)
    this.winancorx = winancorx
    this.winancory = winancory
    this.anchor.x = 0
    this.anchor.y = 0
    this.locked = locked
    this.itemtype = itemtype
    this.dataid = dataid

    switch (itemtype)
    {
      case "item":
        str = $dataItems[dataid].note;
      break;
      case "armor":
        str = $dataArmors[dataid].note;
      break;
      case "weapon":
        str = $dataWeapons[dataid].note;
      break;
    }
    
    celllength = str.match(/<DADcelllength: (.*)>/i);
    cellwidth = str.match(/<DADcellwidth: (.*)>/i);
    shiftx = str.match(/<DADspritecellshiftX: (.*)>/i);
    shifty = str.match(/<DADspritecellshiftY: (.*)>/i);

    if (celllength != null)
    {
      this.celllength = toNumber(celllength[1])
    }
    else
    {
      this.celllength = 1
    }
    if (cellwidth != null)
    {
      this.cellwidth = toNumber(cellwidth[1])
    }
    else
    {
      this.cellwidth = 1
    }
    if (shiftx != null)
    {
      this.shiftx = shiftx[1]
    }
    else
    {
      this.shiftx = 0
    }
    if (shifty != null)
    {
      this.shifty = shifty[1]
    }
    else
    {
      this.shifty = 0
    }

    if (this.celllength == this.cellwidth)
    {
      this.rotateble = false
    }
    else
    {
      this.rotateble = true
    }

    this.direction = direction
    switch (direction)
    {
      case "up":
        this.x = x
        this.y = y - (this.celllength - 1)*DADPlugInfo.cellsize
        this.rotation = 0
      break;
      case "right":
        this.x = x + this.celllength*DADPlugInfo.cellsize
        this.y = y
        this.rotation =Math.PI/2
      break;
      case "down":
        this.x = x + DADPlugInfo.cellsize
        this.y = y + (this.celllength)*DADPlugInfo.cellsize
        this.rotation =Math.PI
      break;
      case "left":
        this.x = x - ((this.celllength-1)*DADPlugInfo.cellsize)
        this.y = y + DADPlugInfo.cellsize
        this.rotation = (Math.PI / 2) * 3
      break;
    }



    this.placex = this.x
    this.placey = this.y
    this.placed = direction
    this.maincell = maincell
    this.module = dadmodule
    this.container = container
    
    this.DADisstillpressed = false
    this.judgeme = false
}

DADItem.prototype.update = function()
{
    Sprite.prototype.update.call(this)
    if (TouchInput.isPressed() && this.cheking == true)
    {
      this.firstclick = true
      this.cheking = false
    }
    else
    {
      this.cheking = false
    }

    if (TouchInput.isPressed() && this.isCursorOnItem() && this.locked != true && this.visible == true && this.parent.visible == true && this.firstclick == false)
    {
        this.DADisstillpressed = true
        alreadytake = true
    }
    if (TouchInput.isReleased() && this.firstclick == true)
    {
      this.firstclick = false
    }
    if (TouchInput.isReleased() && this.DADisstillpressed == true)
    {
        this.DADisstillpressed = false
        this.judgeme = true
        alreadytake = false
    }
    if (this.DADisstillpressed == true)
    {
        switch (this.direction)
        {
            case "up":
                this.x = TouchInput.x - (DADPlugInfo.cellsize/2) + this.winancorx
                this.y = TouchInput.y - ((this.celllength * DADPlugInfo.cellsize) - DADPlugInfo.cellsize/2) + this.winancory
            break;
            case "right":
                this.x = TouchInput.x + ((this.celllength * DADPlugInfo.cellsize) - DADPlugInfo.cellsize/2) + this.winancorx
                this.y = TouchInput.y - (DADPlugInfo.cellsize/2) + this.winancory
            break;
            case "down":
                this.x = TouchInput.x + (DADPlugInfo.cellsize/2) + this.winancorx
                this.y = TouchInput.y + ((this.celllength * DADPlugInfo.cellsize) - DADPlugInfo.cellsize/2) + this.winancory
            break;
            case "left":
                this.x = TouchInput.x - ((this.celllength * DADPlugInfo.cellsize) - DADPlugInfo.cellsize/2) + this.winancorx
                this.y = TouchInput.y + (DADPlugInfo.cellsize/2) + this.winancory
            break;
        }
    }
}

DADItem.prototype.isCursorOnItem = function ()
{
  x = TouchInput.x - this.x + this.winancorx
  y = TouchInput.y - this.y + this.winancory
  switch (this.direction)
  {
    case "up":
      if (x < this.width && x>0 && y<this.height && y > 0 && alreadytake == false)
      {
        return true
      }
    break;
    case "right":
      if (x > -this.height && x<0 && y<this.width && y > 0 && alreadytake == false)
      {
        return true
      }
    break;
    case "down":
      if (x > -this.width && x<0 && y>-this.height && y < 0 && alreadytake == false)
      {
        return true
      }
    break;
    case "left":
      if (x < this.height && x>0 && y>-this.width && y < 0 && alreadytake == false)
      {
        return true
      }
    break;
  }
}




// =================================================================
//
//                       TOOLS
//
// ===================================================================


    Game_Actor.prototype.isAbleToEquip = function(slotId, item) {
      if ( !(item && !$gameParty.hasItem(item)) && (!item || this.equipSlots()[slotId] === item.etypeId)) 
      {
        var verdict = false
        for (var i = 0; i < SceneManager._scene._itemWindow._data.length; i++)
        {
          if (SceneManager._scene._itemWindow._data[i] == item)
          {
            verdict = true
            i = SceneManager._scene._itemWindow._data.length
          }
        }
        return verdict
      }
      else
      {
        return false
      }
    }; 

    ImageManager.loadDG7DAD = function(fileName) {
      return ImageManager.loadNormalBitmap('img/DAD/' + fileName + '.png');
    };

    ImageManager.loadDG7DADMAK = function(fileName) {
      return ImageManager.loadNormalBitmap('img/DAD/' + fileName + '.png');
    };

    TouchInput._onMouseMove = function(event)
    {
        x = Graphics.pageToCanvasX(event.pageX)
        y = Graphics.pageToCanvasY(event.pageY)
        this._onMove(x,y)
    }

    removeFromArray = function (arr, num) {
      newarr = []
      for (var i=0; i < arr.length;i++)
      {
        if (i != num)
        {
          newarr.push(arr[i])
        }
      }
      return newarr
    }

    removeFromArrayByCon = function (arr, num) {
      newarr = []
      for (var i=0; i < arr.length;i++)
      {
        if (arr[i] != num)
        {
          newarr.push(arr[i])
        }
      }
      return newarr
    }

    removeFromArrayById = function (arr, id) {
      newarr = []
      for (var i=0; i < arr.length;i++)
      {
        if (id != arr[i].id)
        {
          newarr.push(arr[i])
        }
      }
      return newarr
    }

    removeFromArrayByDataId = function (arr, dataid) {
      newarr = []
      for (var i=0; i < arr.length;i++)
      {
        if (dataid != arr[i].dataid)
        {
          newarr.push(arr[i])
        }
      }
      return newarr
    }

    getElementNumber = function (arr, data) {
      idup = null
      for (var t = 0; t < arr.length; t++)
      {
        if (arr[t] == data)
        {
          idup = t
          t = arr.length
        }
      }
      return idup
    }

    getElementNumberById = function (arr, data) {
      var idupp = null
      for (var t = 0; t < arr.length; t++)
      {
        if (arr[t].id == data)
        {
          idupp = t
          t = arr.length
        }
      }
      return idupp
    }

    getElementNumberByMaincell = function (arr, data) {
      idup = null
      for (var t = 0; t < arr.length; t++)
      {
        if (arr[t].maincell == data)
        {
          idup = t
          t = arr.length
        }
      }
      return idup
    }

    logicProcessor = function (Cell, CellLogic, DADitem, ActorSourceID, TargetType, TargetID) {
      this.Cell = Cell
      this.ItemType = DADitem.itemtype
      this.ItemId = DADitem.dataid
      this.DADitem = DADitem
      this.ActorSourceID = ActorSourceID

      this.TargetID = undefined
      this.TargetType = TargetType
      switch (TargetType)
      {
        case 1:
          this.TargetID = TargetID
        break;
        case 2:
          this.TargetID = []
          for (var i = 0; i < SceneManager._scene._enemyWindow._enemies.length; i++)
          {
            if (SceneManager._scene._enemyWindow._enemies[i].isDead() == false)
            {this.TargetID.push(i)}
          }
        break;
        case 7:
          this.TargetID = TargetID
        break;
        case 8:
          this.TargetID = []
          for (var i = 0; i < $gameParty.battleMembers().length; i++)
          {
            if ($gameParty.battleMembers()[i].isDead() == false)
            {this.TargetID.push(i)}
          }
        break;
        case 9:
          this.TargetID = TargetID
        break;
        case 10:
          this.TargetID = []
          for (var i = 0; i < $gameParty.battleMembers().length; i++)
          {
            if ($gameParty.battleMembers()[i].isDead() == true)
            {this.TargetID.push(i)}
          }
        break;
        case 11:
          this.TargetID = this.ActorSourceID
        break;
      }

      switch (ItemType)
      {
        case "item":
          this.DBItem = $dataItems[this.ItemId]
        break;
        case "weapon":
          this.DBItem = $dataWeapons[this.ItemId]
        break;
        case "armor":
          this.DBItem = $dataArmors[this.ItemId]
        break;
      }
      this.DBActorSource = $dataActors[ActorSourceID]

      this.verdict = Function(CellLogic)
      return this.verdict(this.Cell, this.ItemType, this.ItemId, this.DADitem, this.ActorSourceID, this.DBItem, this.DBActorSource, this.TargetType, this.TargetID);
    }
    



//=================================================
//
//           PLUGIN COMMANDS ZONE
//
//=================================================

class DADPlugComm {

//=======================================================
//Добавить модуль при одной сумке  
//=======================================================

addDADModuleNoMulti(module){
  if (DADPlugInfo.multibags == "false")
  {
    this.addDADModuleUni(1, module)
  }
}

//=======================================================
//Добавить модуль по персу
//=======================================================

addDADModuleByChar(char, module){
  if (DADPlugInfo.multibags == "true")
  {
    this.addDADModuleUni(char, module)
  }
}

//=======================================================
//Добавить модуль по члену пати  
//=======================================================

addDADModuleByPM(char, module){
  if (DADPlugInfo.multibags == "true")
  {
    this.addDADModuleUni($gameParty._actors[char], module)
  }
}

//=======================================================
//Добавить модуль универсально 
//=======================================================

addDADModuleUni(char, module) {
  var newcells
  var isalready = getElementNumberById($gameParty.DADmodules[char], module)
  var idup = getElementNumberById($dataDADModules, module)
  if (idup != null && isalready == null)
  {
    $gameParty.DADmodules[char].push($dataDADModules[idup])
    $gameParty.DADitems[char].push([])
    if ($dataDADModules[idup].ModGridmode == "Simplex")
    {
      newcells = GetSimplexGrid($dataDADModules[idup].Height, $dataDADModules[idup].Width)
    }
    else
    {
      newcells = GetComplexGrid($dataDADModules[idup].ComplexGridId)
    }
    $gameParty.DADCells[char].push(newcells)
  }
}

//=======================================================
//Убрать модуль при одной сумке    
//=======================================================

removeDADModuleNoMulti(module){
  if (DADPlugInfo.multibags == "false")
  {
    this.removeDADModuleUni(1, module)
  }
}

//=======================================================
//Убрать модуль по персу 
//=======================================================

removeDADModuleByChar(char, module){
  if (DADPlugInfo.multibags == "true")
  {
    this.removeDADModuleUni(char, module)
  }
}

//=======================================================
//Убрать модуль по члену пати   
//=======================================================

removeDADModuleByPM(char, module){
  if (DADPlugInfo.multibags == "true")
  {
    this.removeDADModuleUni($gameParty._actors[char], module)
  }
}

//=======================================================
//Убрать модуль универсально
//=======================================================

removeDADModuleUni(char, module){
  var idup = getElementNumberById($gameParty.DADmodules[char], module)
  if (idup != null)
  {
    for (var i = 0; i < $gameParty.DADitems[char][idup].length; i++)
    {
      switch ($gameParty.DADitems[char][idup][i].itemtype)
      {
        case "item":
          $gameParty.loseItemOld($dataItems[$gameParty.DADitems[char][idup][i].dataid], 1)
        break;
        case "weapon":
          $gameParty.loseItemOld($dataWeapons[$gameParty.DADitems[char][idup][i].dataid], 1)
        break;
        case "armor":
          $gameParty.loseItemOld($dataArmors[$gameParty.DADitems[char][idup][i].dataid], 1)
        break;
      }
    }
    $gameParty.DADmodules[char] = removeFromArray($gameParty.DADmodules[char], idup)
    $gameParty.DADitems[char] = removeFromArray($gameParty.DADitems[char], idup)
    $gameParty.DADCells[char] = removeFromArray($gameParty.DADCells[char], idup)
  }
}

//=======================================================
//Лишить базового модуля при одной сумке 
//=======================================================

removeDADBaseModuleNoMulti(){
  if (DADPlugInfo.multibags == "false")
  {
    this.removeDADBaseModuleUni(1)
  }
}

//=======================================================
//Лишить персонажа базового модуля  
//=======================================================

removeDADBaseModuleByChar(char){
  if (DADPlugInfo.multibags == "true")
  {
    this.removeDADBaseModuleUni(char)
  }
}

//=======================================================
//Лишить члена пати базового модуля  
//=======================================================

removeDADBaseModuleByPM(char){
  if (DADPlugInfo.multibags == "true")
  {
    this.removeDADBaseModuleUni($gameParty._actors[char])
  }
}

//=======================================================
//Лишение базового модуля универсально 
//=======================================================

removeDADBaseModuleUni(char) {
  if ($gameParty.DADmodules[char][0] == $gameParty.BaseModuleRef[char])
  {
    for (var i = 0; i < $gameParty.DADitems[char][0].length; i++)
    {
      switch ($gameParty.DADitems[char][idup][i].itemtype)
      {
        case "item":
          $gameParty.loseItemOld($dataItems[$gameParty.DADitems[char][0][i].dataid], 1)
        break;
        case "weapon":
          $gameParty.loseItemOld($dataWeapons[$gameParty.DADitems[char][0][i].dataid], 1)
        break;
        case "armor":
          $gameParty.loseItemOld($dataArmors[$gameParty.DADitems[char][0][i].dataid], 1)
        break;
      }
    }
    $gameParty.DADmodules[char].shift()
    $gameParty.DADitems[char].shift()
    $gameParty.DADCells[char].shift()
  }
}

//=======================================================
//Вернуть базовый модуль при одной сумке 
//=======================================================

returnDADBaseModuleNoMulti(){
  if (DADPlugInfo.multibags == "false")
  {
    this.returnDADBaseModuleUni(1)
  }
}

//=======================================================
//Вернуть персонажу базовый модуль 
//=======================================================

returnDADBaseModuleByChar(char){
  if (DADPlugInfo.multibags == "true")
  {
    this.returnDADBaseModuleUni(char)
  }
}

//=======================================================
//Вернуть члену пати базовый модуль 
//=======================================================

returnDADBaseModuleByPM(char){
  if (DADPlugInfo.multibags == "true")
  {
    this.returnDADBaseModuleUni($gameParty._actors[char])
  }
}

//=======================================================
//Вернуть базовый модуль универсально
//=======================================================

returnDADBaseModuleUni(char){
  if ($gameParty.DADmodules[char][0] != $gameParty.BaseModuleRef[char])
  {
    $gameParty.DADmodules[char].unshift($gameParty.BaseModuleRef[char])
    $gameParty.DADitems[char].unshift([])
    if ($gameParty.BaseModuleRef[char].ModGridmode == "Simplex")
    {
      newgrid = GetSimplexGrid($gameParty.BaseModuleRef[char].Height, $gameParty.BaseModuleRef[char].Width)
    } 
    else
    {
      newgrid = GetComplexGrid($gameParty.BaseModuleRef[char].ModGridmode)
    }
    $gameParty.DADCells[char].unshift(newgrid)
  }
}

//=======================================================
//Изменить базовый модуль при одной сумке 
//=======================================================

changeDADBaseModuleNoMulti(module){
  if (DADPlugInfo.multibags == "false")
  {
    this.changeDADBaseModuleUni(1, module)
  }
}

//=======================================================
//Изменить персонажу базовый модуль 
//=======================================================

changeDADBaseModuleByChar(char, module){
  if (DADPlugInfo.multibags == "true")
  {
    this.changeDADBaseModuleUni(char, module)
  }
}

//=======================================================
//Изменить члену пати базовый модуль 
//=======================================================

changeDADBaseModuleByPM(char, module){
  if (DADPlugInfo.multibags == "true")
  {
    this.changeDADBaseModuleUni($gameParty._actors[char], module)
  }
}

//=======================================================
//Изменить базовый модуль универсально
//=======================================================

changeDADBaseModuleUni(char, module){
  var idup = getElementNumberById($dataDADModules, module)
  if (idup != null)
  {
    for (var i = 0; i < $gameParty.DADitems[char][idup].length; i++)
    {
      switch ($gameParty.DADitems[char][idup][i].itemtype)
      {
        case "item":
          $gameParty.loseItemOld($dataItems[$gameParty.DADitems[char][idup][i].dataid], 1)
        break;
        case "weapon":
          $gameParty.loseItemOld($dataWeapons[$gameParty.DADitems[char][idup][i].dataid], 1)
        break;
        case "armor":
          $gameParty.loseItemOld($dataArmors[$gameParty.DADitems[char][idup][i].dataid], 1)
        break;
      }
    }
    if ($dataDADModules[idup].ModGridmode == "Simplex")
    {
      newcells = GetSimplexGrid($dataDADModules[idup].Height, $dataDADModules[idup].Width)
    }
    else
    {
      newcells = GetComplexGrid($dataDADModules[idup].ComplexGridId)
    }
    $gameParty.DADitems[char][0] = []
    $gameParty.DADCells[char][0] = newcells
    $gameParty.BaseModuleRef[char] = $dataDADModules[idup]
    $gameParty.DADmodules[char] = $dataDADModules[idup]
  }
}

//=======================================================
//Добавить предмет в инвентарь при одной сумке
//=======================================================

addDADItemInInvNoMulti(itemtype, dataid, module) {
  if (DADPlugInfo.multibags == "false")
  {
    this.addDADItemInInvUni(itemtype, dataid, 1, module)
  }
}

//=======================================================
//Добавить предмет персу 
//=======================================================

addDADItemInInvByChar(itemtype, dataid, char, module) {
  if (DADPlugInfo.multibags == "true")
  {
    this.addDADItemInInvUni(itemtype, dataid, char, module)
  }
}

//=======================================================
//Добавить предмет члену пати 
//=======================================================

addDADItemInInvByPM(itemtype, dataid, char, module) {
  if (DADPlugInfo.multibags == "true")
  {
    this.addDADItemInInvUni(itemtype, dataid, $gameParty._actors[char], module)
  }
}

//=======================================================
//Добавить предмет в инвентарь универсально
//=======================================================

addDADItemInInvUni(itemtype, dataid, char, module) {
  var conf = null
  if (module != undefined)
  {
    var idup = getElementNumberById($gameParty.DADmodules[char], module)
    if (idup != null)
    {
      conf = isItemCanBePlacedUniversal($gameParty.DADCells[char][idup], itemtype, dataid, char)
      if (conf != null)
      {
        switch (itemtype)
        {
          case "item":
            $gameParty.gainItemOld($dataItems[dataid], 1)
          break;
          case "weapon":
            $gameParty.gainItemOld($dataWeapons[dataid], 1)
          break;
          case "armor":
            $gameParty.gainItemOld($dataArmors[dataid], 1)
          break;
        }
        $gameParty.DADitems[char][idup].push({itemtype: itemtype, dataid: dataid, maincell: conf.cell, direction: conf.direction})

        for (var i = 0; i<conf.claimedcells.length;i++)
        {
          $gameParty.DADCells[char][idup][conf.claimedcells[i]].item = $gameParty.DADitems.length - 1
        }
      }
    }
  }
  else
  {
    for (var k = 0; k < $gameParty.DADmodules[char].length; k++)
    {
      conf = isItemCanBePlacedUniversal($gameParty.DADCells[char][k], itemtype, dataid, char)
      if (conf != null)
      {
        switch (itemtype)
        {
          case "item":
            $gameParty.gainItemOld($dataItems[dataid], 1)
          break;
          case "weapon":
            $gameParty.gainItemOld($dataWeapons[dataid], 1)
          break;
          case "armor":
            $gameParty.gainItemOld($dataArmors[dataid], 1)
          break;
        }
        $gameParty.DADitems[char][k].push({itemtype: itemtype, dataid: dataid, maincell: conf.cell, direction: conf.direction})
  
        for (var i = 0; i<conf.claimedcells.length;i++)
        {
          $gameParty.DADCells[char][k][conf.claimedcells[i]].item = $gameParty.DADitems[char][k].length - 1
        }
        k = $gameParty.DADmodules[char].length
      }
    }
  }
}

//=======================================================
//Убрать предмет из инвентаря  при одной сумке
//=======================================================

removeDADItemFromInvNoMulti(itemtype, dataid, module) {
  if (DADPlugInfo.multibags == "false")
  {
    this.removeDADItemFromInvUni(itemtype, dataid, 1, module)
  }
}

//=======================================================
//Убрать предмет из инвентаря перса
//=======================================================

removeDADItemFromInvByChar(itemtype, dataid, char, module) {
  if (DADPlugInfo.multibags == "true")
  {
    this.removeDADItemFromInvUni(itemtype, dataid, char, module)
  }
}

//=======================================================
//Убрать предмет из инвентаря члена пати
//=======================================================

removeDADItemFromInvByPM(itemtype, dataid, char, module) {
  if (DADPlugInfo.multibags == "true")
  {
    this.removeDADItemFromInvUni(itemtype, dataid, $gameParty._actors[char], module)
  }
}

//=======================================================
//Убрать предмет из инвентаря универсально
//=======================================================

removeDADItemFromInvUni(itemtype, dataid, char, module) {
  if (module != undefined)
  {
    idup = getElementNumberById($gameParty.DADmodules[char], module)
    if (idup != null)
    {
      for (var i=0; i < $gameParty.DADitems[char][idup].length;i++)
      {
        if ($gameParty.DADitems[char][idup][i].itemtype == itemtype && $gameParty.DADitems[char][idup][i].dataid == dataid)
        {
          for (var j =0; j < $gameParty.DADCells[1][idup].length; j++)
          {
            if ($gameParty.DADCells[char][idup][j].item == i)
            {
              $gameParty.DADCells[char][idup][j].item = null
              $gameParty.DADCells[char][idup][j].ismaincell = false
            }
          }
          switch (itemtype)
          {
            case "item":
              $gameParty.loseItemOld($dataItems[dataid], 1)
            break;
            case "weapon":
              $gameParty.loseItemOld($dataWeapons[dataid], 1)
            break;
            case "armor":
              $gameParty.loseItemOld($dataArmors[dataid], 1)
            break;
          }
          $gameParty.DADitems[char][idup] = removeFromArray($gameParty.DADitems[char][idup], i)
          i = $gameParty.DADitems[char][idup].length
        }
      }
    }
  }
  else
  {
    for (var k = 0; k < $gameParty.DADitems[char].length; k++)
    {
      for (var i=0; $gameParty.DADitems[char][k] != undefined && i < $gameParty.DADitems[char][k].length;i++)
      {
        if ($gameParty.DADitems[char][k][i].itemtype == itemtype && $gameParty.DADitems[char][k][i].dataid == dataid)
        {
          for (var j =0; j < $gameParty.DADCells[char][k].length; j++)
          {
            if ($gameParty.DADCells[char][k][j].item == i)
            {
              $gameParty.DADCells[char][k][j].item = null
              $gameParty.DADCells[char][k][j].ismaincell = false
            }
          }
          switch (itemtype)
          {
            case "item":
              $gameParty.loseItemOld($dataItems[dataid], 1)
            break;
            case "weapon":
              $gameParty.loseItemOld($dataWeapons[dataid], 1)
            break;
            case "armor":
              $gameParty.loseItemOld($dataArmors[dataid], 1)
            break;
          }
          $gameParty.DADitems[char][k] = removeFromArray($gameParty.DADitems[char][k], i)
          i = $gameParty.DADitems[char][k].length + 1
          k = $gameParty.DADitems[char].length + 1
        }
      }
    }
  }
}

//=======================================================
//Очистить инвентарь при одной сумке
//=======================================================

cleanInvNoMulti(module){
  if (DADPlugInfo.multibags == "false")
  {
    this.cleanInvUni(1, module)
  }
}

//=======================================================
//Очистить инвентарь персонажу
//=======================================================

cleanInvByChar(char, module){
  if (DADPlugInfo.multibags == "true")
  {
    this.cleanInvUni(char, module)
  }
}

//=======================================================
//Очистить инвентарь члену пати 
//=======================================================

cleanInvByPM(char, module){
  if (DADPlugInfo.multibags == "true")
  {
    this.cleanInvUni($gameParty._actors[char], module)
  }
}

//=======================================================
//Очистить инвентарь универсально
//=======================================================

cleanInvUni(char, module) {
  if (module != undefined)
  {
    idup = getElementNumberById($gameParty.DADmodules, module)
    if (idup != null)
    {
      for (var i = 0; i < $gameParty.DADitems[char][idup].length; i++)
      {
        switch ($gameParty.DADitems[char][idup][i].itemtype)
        {
          case "item":
            $gameParty.loseItemOld($dataItems[$gameParty.DADitems[char][idup][i].dataid], 1)
          break;
          case "weapon":
            $gameParty.loseItemOld($dataWeapons[$gameParty.DADitems[char][idup][i].dataid], 1)
          break;
          case "armor":
            $gameParty.loseItemOld($dataArmors[$gameParty.DADitems[char][idup][i].dataid], 1)
          break;
        }
      }
      $gameParty.DADitems[char][idup] = []
      for (var i = 0; i < $gameParty.DADCells[char][idup].length;i++)
      {
        $gameParty.DADCells[1][idup][i].item = null
        $gameParty.DADCells[1][idup][i].ismaincell = false
      }
    }
  }
    else
    {
      for (var k = 0; k < $gameParty.DADCells[1].length; k++)
      {
        for (var i = 0; i < $gameParty.DADitems[char][k].length; i++)
        {
          switch ($gameParty.DADitems[char][k][i].itemtype)
          {
            case "item":
              $gameParty.loseItemOld($dataItems[$gameParty.DADitems[char][k][i].dataid], 1)
            break;
            case "weapon":
              $gameParty.loseItemOld($dataWeapons[$gameParty.DADitems[char][k][i].dataid], 1)
            break;
            case "armor":
              $gameParty.loseItemOld($dataArmors[$gameParty.DADitems[char][k][i].dataid], 1)
            break;
          }
        }
        $gameParty.DADitems[char][k] = []
        for (var i = 0; i < $gameParty.DADCells[char][k].length;i++)
        {
          $gameParty.DADCells[char][k][i].item = null
          $gameParty.DADCells[char][k][i].ismaincell = false
        }
      }
    }
}

//=======================================================
//Существует ли сундук   
//=======================================================

isDADChestExists(ChestId, returnswitch) {
  var flag = true
    for (var i = 0; i<$gameParty.DADChests.length;i++)
    {
      if ($gameParty.DADChests[i].id == ChestId)
      {
        flag = i
        i = $gameParty.DADChests.length
        if (returnswitch == null || returnswitch == undefined)
        {return flag}
        else
        {$gameSwitches.setValue(returnswitch, false)}
      }
    }
    if (flag == true)
    {
      return false
    }
}

//=======================================================
//Создать сундук
//=======================================================

createDADChest(id, mid) {
  if (this.isDADChestExists(id) === false)
  {
    var neidup = null
    neidup = getElementNumberById($dataDADModules, mid)
    var nenewcells = null
    if (neidup != null)
    {
      if ($dataDADModules[neidup].ModGridmode == "Simplex")
      {
        nenewcells = GetSimplexGrid($dataDADModules[neidup].Height, $dataDADModules[neidup].Width)
      }
      else
      {
        nenewcells = GetComplexGrid($dataDADModules[neidup].ComplexGridId)
      }
      $gameParty.DADChests.push(new DADChest(id, nenewcells, [toNumber($dataDADModules[neidup].x)], [toNumber($dataDADModules[neidup].y)], [$dataDADModules[neidup].maket], [toNumber($dataDADModules[neidup].maketShiftX)], [toNumber($dataDADModules[neidup].maketShiftY)]))
    }
  }
}

//=======================================================
//Удалить сундук      
//=======================================================

deleteDADChest(id) {
  if (this.isDADChestExists(id) != false)
    {
      $gameParty.DADChests = removeFromArrayById($gameParty.DADChests, id) 
    }
  
}

//=======================================================
//Сетнуть сундук      
//=======================================================

setDADChest(cid, pid) {
  var celllength
  var cellwidth
  var researchcell
  var researchforw
  var str 
  if (this.isDADChestExists(cid) == false)
  {
  var flag
  for (var i = 0; i<$dataDADItemSetPresets.length;i++)
    {
      if ($dataDADItemSetPresets[i].id == pid)
      {
        flag = i
        i = $dataDADItemSetPresets.length
      }
    }
  for (var i = 0; i < $gameParty.DADChests[this.isDADChestExists(cid)].cells[0].length; i++)
  {
    $gameParty.DADChests[this.isDADChestExists(cid)].cells[0][i].item = null
  }
  $gameParty.DADChests[this.isDADChestExists(cid)].items = [$dataDADItemSetPresets[flag].items]
  
  for (var i = 0; i < $dataDADItemSetPresets[flag].items.length; i++)
  {
    switch ($dataDADItemSetPresets[flag].items[i].itemtype)
    {
      case "item":
        str = $dataItems[$gameParty.DADChests[this.isDADChestExists(cid)].items[0][i].dataid].note;
      break;
      case "armor":
        str = $dataArmors[$gameParty.DADChests[this.isDADChestExists(cid)].items[0][i].dataid].note;
      break;
      case "weapon":
        str = $dataWeapons[$gameParty.DADChests[this.isDADChestExists(cid)].items[0][i].dataid].note;
      break;
    }

    celllength = str.match(/<DADcelllength: (.*)>/i);
    cellwidth = str.match(/<DADcellwidth: (.*)>/i);
    if (celllength != null)
    {
      this.celllength = toNumber(celllength[1])
    }
    else
    {
      this.celllength = 1
    }
    if (cellwidth != null)
    {
      this.cellwidth = toNumber(cellwidth[1])
    }
    else
    {
      this.cellwidth = 1
    }
    var target
    for (var j = 0; j < $gameParty.DADChests[this.isDADChestExists(cid)].cells[0].length; j++)
    {
      if ($gameParty.DADChests[this.isDADChestExists(cid)].items[0][i].maincell == $gameParty.DADChests[this.isDADChestExists(cid)].cells[0][j].id)
      {
        researchcell = $gameParty.DADChests[this.isDADChestExists(cid)].cells[0][j]
        researchforw = $gameParty.DADChests[this.isDADChestExists(cid)].cells[0][j]
        target = j
        j = $gameParty.DADChests[this.isDADChestExists(cid)].cells[0]
      }
    }
    for (var j = 0; j < this.cellwidth; j++)
    {
      for (var m = 0; m < this.celllength; m++)
      {
        $gameParty.DADChests[this.isDADChestExists(cid)].cells[0][target].item = i
        var trin
        switch ($dataDADItemSetPresets[flag].items[i].direction)
        {
          case "up":
            trin = researchcell.jointU
          break;
          case "right":
            trin = researchcell.jointR
          break;
          case "down":
            trin = researchcell.jointD
          break;
          case "left":
            trin = researchcell.jointL
          break;
        }
        for (var t = 0; t < $gameParty.DADChests[this.isDADChestExists(cid)].cells[0].length; t++)
        {
          var idup = null
          if ($gameParty.DADChests[this.isDADChestExists(cid)].cells[0][t].id == trin)
          {
            idup = t
            t = $gameParty.DADChests[this.isDADChestExists(cid)].cells[0].length
          }
        }
        
        researchcell = $gameParty.DADChests[this.isDADChestExists(cid)].cells[0][idup]
        target = idup
      }
      var trin
      switch ($dataDADItemSetPresets[flag].items[i].direction)
        {
          case "up":
            trin = researchforw.jointR
          break;
          case "right":
            trin = researchforw.jointD
          break;
          case "down":
            trin = researchforw.jointL
          break;
          case "left":
            trin = researchforw.jointU
          break;
        }
        for (var m = 0; m < $gameParty.DADChests[this.isDADChestExists(cid)].cells[0].length; m++)
        {
          if (trin == $gameParty.DADChests[this.isDADChestExists(cid)].cells[0][m].id)
          {
            researchcell = $gameParty.DADChests[this.isDADChestExists(cid)].cells[0][m]
            researchforw = $gameParty.DADChests[this.isDADChestExists(cid)].cells[0][m]
            target = m
            m = $gameParty.DADChests[this.isDADChestExists(cid)].cells[0]
          }
        }
    }
  }
}
}

//=======================================================
//Добавить предмет в сундук 
//=======================================================

addDADItemInChest(itemtype, dataid, chest) {
  var idup = getElementNumberById($gameParty.DADChests, chest)
  if (idup != null)
  {conf = isItemCanBePlacedUniversal($gameParty.DADChests[idup].cells[0], itemtype, dataid)}
  if (conf != null)
  {
    switch (itemtype)
    {
      case "item":
        $gameParty.gainItemOld($dataItems[dataid], 1)
      break;
      case "weapon":
        $gameParty.gainItemOld($dataWeapons[dataid], 1)
      break;
      case "armor":
        $gameParty.gainItemOld($dataArmors[dataid], 1)
      break;
    }
    $gameParty.DADChests[idup].items[0].push({itemtype: itemtype, dataid: dataid, maincell: conf.cell, direction: conf.direction})

    for (var i = 0; i<conf.claimedcells.length;i++)
    {
      $gameParty.DADChests[idup].cells[0][conf.claimedcells[i]].item = $gameParty.DADChests[idup].items[0].length - 1
    }
  }
}

//=======================================================
//Открыть сундук
//=======================================================

openDADChest(cid){
  var sasich = this.isDADChestExists(cid)
  if (sasich !== false)
  {
    currentchest = sasich
    SceneManager.push(Scene_DADChest)
  }
}

//=======================================================
//Очистить сундук        
//=======================================================

clearDADChest(chest){
  idup = getElementNumberById($gameParty.DADChests, chest)
  for (var i = 0; i < $gameParty.DADChests[idup].cells.length; i++)
  {
    $gameParty.DADChests[idup].cells[0][i].item = null
    $gameParty.DADChests[idup].cells[0][i].ismaincell = false
  }
  $gameParty.DADChests[idup].items = [[]]
}

//=======================================================
//Проверка имеется ли модуль в инвентаре одной сумкой
//=======================================================

isThereAModuleNoMulti(module, returnswitch) {
  if (DADPlugInfo.multibags == "false")
  {
    this.isThereAModuleUni(1, module, returnswitch)
  }
}

//=======================================================
//Проверка имеется ли модуль в инвентаре по персу
//=======================================================

isThereAModuleByChar(char, module, returnswitch) {
  if (DADPlugInfo.multibags == "true")
  {
    this.isThereAModuleUni(char, module, returnswitch)
  }
}

//=======================================================
//Проверка имеется ли модуль в инвентаре по члену пати
//=======================================================

isThereAModuleByPM(char, module, returnswitch) {
  if (DADPlugInfo.multibags == "true")
  {
    this.isThereAModuleUni($gameParty._actors[char], module, returnswitch)
  }
}

//=======================================================
//Проверка имеется ли модуль в инвентаре по члену пати
//=======================================================

isThereAModuleUni(char,module,returnswitch)
{
  var verdict = false
  for (var i=0; i < $gameParty.DADmodules[char].length;i++)
  {
    if ($gameParty.DADmodules[char][i].id == module)
    {
      verdict = true
      i = $gameParty.DADmodules[char].length
    }
  }
  if (returnswitch != undefined && returnswitch != null)
  {$gameSwitches.setValue(returnswitch, verdict)}
  else
  {return verdict;}
}

//=======================================================
//Проверка помещается ли предмет в инвентаре одной сумкой
//=======================================================

isDADItemCanBePlacedNoMulti(itemtype, dataid, returnswitch, module) {
  if (DADPlugInfo.multibags == "false")
  {
    this.isDADItemCanBePlacedUni(itemtype, dataid, returnswitch, 1, module)
  }
}

//=======================================================
//Проверка помещается ли предмет в инвентаре по айди перса
//=======================================================

isDADItemCanBePlacedByChar(itemtype, dataid, char, returnswitch, module) {
  if (DADPlugInfo.multibags == "true")
  {
    this.isDADItemCanBePlacedUni(itemtype, dataid, char, returnswitch, module)
  }
}

//=======================================================
//Проверка помещается ли предмет в инвентаре по члену пати
//=======================================================

isDADItemCanBePlacedByPM(itemtype, dataid, char, returnswitch, module) {
  if (DADPlugInfo.multibags == "true")
  {
    this.isDADItemCanBePlacedUni(itemtype, dataid, $gameParty._actors[char], returnswitch, module)
  }
}

//=======================================================
//Проверка помещается ли предмет в инвентаре универсально
//=======================================================

isDADItemCanBePlacedUni(itemtype, dataid, char, returnswitch, module) {
  var verdict = null
  if (module != undefined)
  {
    idup = getElementNumberById($gameParty.DADmodules[char], module)
    verdict = isItemCanBePlacedUniversal($gameParty.DADCells[char][idup], itemtype, dataid, char)
  }
  else
  {
    for (var i = 0; verdict == null && i < $gameParty.DADmodules[char]; i++)
    {
      verdict = isItemCanBePlacedUniversal($gameParty.DADCells[char][i], itemtype, dataid, char)
    }
  }
  if (verdict != null && returnswitch != "null")
  {
    $gameSwitches.setValue(returnswitch, true)
  }
  else if (returnswitch != "null")
  {
    $gameSwitches.setValue(returnswitch, false)
  }
}

//=======================================================
//Проверка помещается ли предмет в сундук
//=======================================================

isDADItemCanBePlacedInChest(itemtype, dataid, chest, returnswitch) {
  var verdict = null
  idup = getElementNumberById($gameParty.DADChests, chest)
  if (idup != null)
  {verdict = isItemCanBePlacedUniversal($gameParty.DADChests[idup].cells[0], itemtype, dataid)}
  if (returnswitch != undefined && returnswitch != null && returnswitch != "null")
  {
    if (verdict != null)
      {
        $gameSwitches.setValue(returnswitch, true)
      }
      else
      {
        $gameSwitches.setValue(returnswitch, false)
      }
  }
  else
  {
    if (verdict != null)
      {
        return true
      }
      else
      {
        return false
      }
  }
  
}

//=======================================================
//Проверка наличия предмета в модуле по одной сумке
//=======================================================

isDADItemInModuleNoMulti(itemtype, dataid, returnswitch, module) {
  if (DADPlugInfo.multibags == "false" && module != undefined)
  {
    this.isUniHaveDADItem(itemtype, dataid, 1, returnswitch, module)
  }
}

//=======================================================
//Проверка наличия предмета у перса
//=======================================================

isCharHaveDADItem(itemtype, dataid, char, returnswitch, module) {
  if (DADPlugInfo.multibags == "true")
  {
    this.isUniHaveDADItem(itemtype, dataid, char, returnswitch, module)
  }
}

//=======================================================
//Проверка наличия предмета в модуле по номеру члена пати
//=======================================================

isPMHaveDADItem(itemtype, dataid, char, returnswitch, module) {
  if (DADPlugInfo.multibags == "true")
  {
    this.isUniHaveDADItem(itemtype, dataid, $gameParty._actors[char], returnswitch, module)
  }
}

//=======================================================
//Проверка наличия предмета в у перса универсально
//=======================================================

isUniHaveDADItem(itemtype, dataid, char, returnswitch, module) {
  verdict = false
  if (module != undefined)
  {
    idup = getElementNumberById($gameParty.DADmodules[char], module)
    if (idup != null)
    {
      for (j=0; j < $gameParty.DADitems[char][idup].length; j++)
      {
        if ($gameParty.DADitems[char][idup][j].itemtype == itemtype && $gameParty.DADitems[char][idup][j].dataid == dataid)
        {
          j = $gameParty.DADitems[char][idup].length
          verdict = true
        }
      }
    }
  }
  else
  {
    for (var i = 0; i < $gameParty.DADitems[char].length;i++)
    {
      for (j=0; i != $gameParty.DADitems[char].length && j < $gameParty.DADitems[char][i].length; j++)
      {
        if ($gameParty.DADitems[char][i] != undefined && $gameParty.DADitems[char][i][j].itemtype == itemtype && $gameParty.DADitems[char][i][j].dataid == dataid)
        {
          j = $gameParty.DADitems[char][i].length
          i = $gameParty.DADitems[char].length
          verdict = true
        }
      }
    }
  }
  if (returnswitch != null && returnswitch != "null")
  {
    $gameSwitches.setValue(returnswitch, verdict)
  }
  return verdict;
}

//=======================================================
//Проверка пустой ли инвентарь по одной сумке
//=======================================================

isInventoryEmptyNoMulti(returnswitch, module){
  if (DADPlugInfo.multibags == "false")
  {
    this.isInventoryEmptyUni(1, returnswitch, module)
  }
}

//=======================================================
//Проверка пустой ли инвентарь по персу
//=======================================================

isInventoryEmptyByChar(char, returnswitch, module){
  if (DADPlugInfo.multibags == "true")
  {
    this.isInventoryEmptyUni(char, returnswitch, module)
  }
}

//=======================================================
//Проверка пустой ли инвентарь по члену пати
//=======================================================

isInventoryEmptyByPM(char, returnswitch, module){
  if (DADPlugInfo.multibags == "true")
  {
    this.isInventoryEmptyUni($gameParty._actors[char], returnswitch, module)
  }
}

//=======================================================
//Проверка инвентаря на пустоту универсально
//=======================================================

isInventoryEmptyUni(char, returnswitch, module){
  verdict = true
  if (module != undefined)
  {
    idup = getElementNumberById($gameParty.DADmodules[char], module)
    if (idup != null && $gameParty.DADitems[char][idup].length != 0)
    {
      verdict = false
    }
  }
  else
  {
    for (var i = 0; verdict == true && i < $gameParty.DADitems[char].length; i++)
    {
      if ($gameParty.DADitems[char][i].length != 0)
      {
        verdict = false
      }
    }
  }
  $gameSwitches.setValue(returnswitch, verdict)
}

//=======================================================
//Выбор предмета ибо да
//=======================================================

DADChooseItem(){
  SceneManager.push(Scene_DADChooseItem)
}

//=======================================================
//Поставить лут на битву ибо мне лень копаться в менеджере
//=======================================================

setDADBattleLoot(tea,pid,h,w){
  currentloot = {cells: null, items: null}
  if (tea == "false")
  {
    currentloot.cells = [GetSimplexGrid(h,w)]
  }
  else
  {
    currentloot.cells = [GetComplexGrid(h)]
  }
  currentloot.items = [[]]
  pid = getElementNumberById($dataDADLootPresets, pid)
  for (var i = 0; i<$dataDADLootPresets[pid].items.length;i++)
  {
    var ran = Math.random()
    if (ran <= $dataDADLootPresets[pid].items[i].chance)
    {
      currentloot.items[0].push({dataid: $dataDADLootPresets[pid].items[i].dataid ,direction: $dataDADLootPresets[pid].items[i].direction , itemtype: $dataDADLootPresets[pid].items[i].itemtype ,maincell: $dataDADLootPresets[pid].items[i].maincell })
    }
  }
}

}

DADPC = new DADPlugComm

DG7.DADI.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    DG7.DADI.Game_Interpreter_pluginCommand.call(this, command, args)
    if (DADPC[command] != undefined)
    {
      DADPC[command](args[0],args[1],args[2],args[3],args[4],args[5])
    }
  }


// ==================================
//
//          FUCK BATTLES
//
// ==================================

  BattleManager.setup = function(troopId, canEscape, canLose) {
    this.initMembers();
    this._canEscape = canEscape;
    this._canLose = canLose;
    $gameTroop.setup(troopId);
    $gameScreen.onBattleStart();
    this.makeEscapeRatio();
    this.ticker = 0
  };

  BattleManager.processVictory = function() {
    SceneManager._scene._DADItemInfo.mode = "Victory"
    if (this.ticker === 0)
    {
      SceneManager._scene.KYS = true
      this.ticker = 1
      $gameParty.removeBattleStates();
      $gameParty.performVictory();
      this.playVictoryMe();
      this.replayBgmAndBgs();
      this.makeRewards();
      this.displayVictoryMessage();
      this.gainRewards();
    }
    else if (currentloot == null)
    {
      this.endBattle(0);
    }
    else if (this.ticker === 1)
    {
      this.ticker = 2
      SceneManager._scene.winnigshit()
    }
  };

  BattleManager.gainRewards = function() { 
      this.gainExp();
      this.gainGold();
};

BattleManager.startAction = function() {
  var subject = this._subject;
  var action = subject.currentAction();
  var targets = action.makeTargets();
  this._phase = 'action';
  this._action = action;
  this._targets = targets;

  for (var i=0; i<SceneManager._scene._DADactionlist.length; i++)
  {
    if (this._action == SceneManager._scene._DADactionlist[i].action)
    {
      pointedactor = SceneManager._scene._DADactionlist[i].pointedactor
      DADmodulepointed = SceneManager._scene._DADactionlist[i].DADmodulepointed
      DADitempointed = SceneManager._scene._DADactionlist[i].DADitempointed
      for (var g = 0; g < SceneManager._scene._DADInventoryWindow[pointedactor].DADitems[DADmodulepointed][DADitempointed].allcells.length; g++)
        {
          TargetType = action.item().scope
          TargetID = action._targetIndex
          var ohb = SceneManager._scene._DADInventoryWindow[pointedactor].DADcells[DADmodulepointed][SceneManager._scene._DADInventoryWindow[pointedactor].DADitems[DADmodulepointed][DADitempointed].allcells[g]]
          fc = logicProcessor(ohb, ohb.ItemOkBattleLogic, SceneManager._scene._DADInventoryWindow[pointedactor].DADitems[DADmodulepointed][DADitempointed], $gameParty._actors[SceneManager._scene._statusWindow._index], TargetType, TargetID)
        }
      
      var point = null
      for (var j=0; j < $gameParty._actors.length; j++)
      {
        if ($gameParty._actors[pointedactor] == $gameParty._actors[j])
        {point = j; j = $gameParty._actors.length}
      }
      var positionsx = []
      var positionsy = []
      var makets = []
      var mpx = []
      var mpy = []
      for (var j=0; j<$gameParty.DADmodules[$gameParty._actors[pointedactor]].length ;j++)
      {
        positionsx.push(toNumber($gameParty.DADmodules[$gameParty._actors[pointedactor]][j].x))
        positionsy.push(toNumber($gameParty.DADmodules[$gameParty._actors[pointedactor]][j].y))
        makets.push($gameParty.DADmodules[$gameParty._actors[pointedactor]][j].maket)
        mpx.push(toNumber($gameParty.DADmodules[$gameParty._actors[pointedactor]][j].maketShiftX))
        mpy.push(toNumber($gameParty.DADmodules[$gameParty._actors[pointedactor]][j].maketShiftY))
      }
      SceneManager._scene._DADInventoryWindow[point].DADitems = removeFromArray(SceneManager._scene._DADInventoryWindow[point].DADitems, DADitempointed)
      $gameParty.DADitems[$gameParty._actors[pointedactor]][DADmodulepointed] = removeFromArray($gameParty.DADitems[$gameParty._actors[pointedactor]][DADmodulepointed], DADitempointed)
      SceneManager._scene._DADInventoryWindow[point].refresh($gameParty.DADCells[$gameParty._actors[pointedactor]], $gameParty.DADitems[$gameParty._actors[pointedactor]], point, true, positionsx, positionsy, makets, mpx, mpy)
      i = SceneManager._scene._DADactionlist.length
    }
  }

  subject.useItem(action.item());
  this._action.applyGlobal();
  this.refreshStatus();
  this._logWindow.startAction(subject, action, targets);

};


  


// ======================================
//
//           CORE
//
// ATTENTION!!! HIGH RADIATION!!!
//
// ======================================
    
    syncupdateUni = function () {

    this.corePrepare = function(situation)
    {
      this.isstillpressed = false
      this.tsample = null
      this.rotated = false
      this.KYS = false
      this.reactionflag = true
      this.isfail = false
      this.maincell = null
      this.allcells = []
      this.researchcell = null
      this.researchforw = null
      this.situation = situation
      this.grcon = null
      this.grmod = null
      this.grit = null
      this.refpls = false
    }


    this.coreTsampleTake = function(i,j,k)
    {
      if (i != undefined && this._DADInventoryWindow[i].DADitems[j][k].DADisstillpressed == true)
      {
        this.grcon = i
        this.grmod = j
        this.grit = k
        this.tsample = this._DADInventoryWindow[this.grcon].DADitems[this.grmod][this.grit]
        arr = this._DADInventoryWindow[this.grcon].DADitems[this.grmod]
        this._DADInventoryWindow[this.grcon].removeChild(this._DADInventoryWindow[this.grcon].DADitems[this.grmod][this.grit])
        arr = removeFromArray(arr, this.grit)
        this._DADInventoryWindow[this.grcon].DADitems[this.grmod] = arr

        if ( (this.grcon != this._DADInventoryWindow.length-1 && this.situation != "Shopping") || (this.grcon == this._DADInventoryWindow.length-1 && this.situation == "Equipping") ) 
        {
          arr = $gameParty.DADitems[$gameParty._actors[this.grcon]][this.grmod]
          arr = removeFromArray(arr, this.grit)
          $gameParty.DADitems[$gameParty._actors[this.grcon]][this.grmod] = arr
        }
        
        this.addChild(this.tsample)
        this.tsample.winancorx = 0
        this.tsample.winancory = 0
        console.log("Был извлечен объект тсампл")
      }
      if (this.situation == "Equipping" && this._blankWindow.DADitem != null && this._blankWindow.DADitem.DADisstillpressed == true)
      {
        this.grcon = "equip"
        this.grmod = "equip"
        this.grit = "equip"
        this.tsample = this._blankWindow.DADitem
        this._blankWindow.removeChild(this._blankWindow.DADitem)
        this._blankWindow.DADitem = null
        this.addChild(this.tsample)
        this.tsample.winancorx = 0
        this.tsample.winancory = 0
        console.log("Был извлечен объект тсампл")
      }
    }

    this.coreAimChecking = function ()
    {
      for (var i=0; i<this._DADInventoryWindow.length; i++)
      {
        for (var j = 0; j< this._DADInventoryWindow[i].DADitems.length; j++)
        {
          for (var k = 0; k < this._DADInventoryWindow[i].DADitems[j].length; k++)
          {
            if (this._DADInventoryWindow[i].DADitems[j][k].isCursorOnItem() && this._DADInventoryWindow[i].DADitems[j][k].visible  && this._DADInventoryWindow[i].DADitems[j][k].parent.visible == true)
            {
              this._DADItemInfo.refresh(this._DADInventoryWindow[i].DADitems[j][k].itemtype, this._DADInventoryWindow[i].DADitems[j][k].dataid)
              this.shash = true
              for (var t = 0; this._itemWindow != undefined && t< this._itemWindow._data.length; t++)
              {
                if (this._itemWindow._data[t] != null && this._itemWindow._data[t].id == this._DADInventoryWindow[i].DADitems[j][k].dataid)
                {
                  this._itemWindow.select(t)
                  t = this._itemWindow._data.length
                }
              }
              this.coreClickChecking(i,j,k)
              this.coreReleaseChecking(i,j,k)
            }
            this.coreTsampleTake(i,j,k)
          }
        }
      }
      
      if (this.situation == "Equipping" && this._blankWindow.DADitem != null && this._blankWindow.DADitem.isCursorOnItem() == true && this._blankWindow.DADitem.visible == true && this._blankWindow.visible == true)
      {
        this._DADItemInfo.refresh(this._blankWindow.DADitem.itemtype, this._blankWindow.DADitem.dataid)
        this.shash = true
        this.coreReleaseChecking()
      }
      this.coreTsampleTake()
      if (this.tsample != null)
      {
        this._DADItemInfo.refresh(this.tsample.itemtype, this.tsample.dataid)
        this.shash = true
      }
      if (this.shash == false)
      {
        if (this.situation == "Equipping")
        {
          this._statusWindow.setTempActor(undefined);
          this._statusWindow.refresh()
        }
        this._DADItemInfo.refresh("clear")
      }
      this.coreReleaseChecking()
    }


    this.coreClickChecking = function (i,j,k)
    {
      var locked = false
      var fc = null
      for (var f = 0; locked == false && f < this._DADInventoryWindow[i].DADitems[j][k].allcells.length; f++)
      {
        var ohb = this._DADInventoryWindow[i].DADcells[j][this._DADInventoryWindow[i].DADitems[j][k].allcells[f]]
        if ($gameParty._inBattle == true)
        {
          fc = logicProcessor(ohb, ohb.ItemUsableBattleLogic, this._DADInventoryWindow[i].DADitems[j][k], $gameParty._actors[this._statusWindow._index])
        }
        else if (this.situation != "Selling")
        {
          fc = logicProcessor(ohb, ohb.ItemUsableInvLogic, this._DADInventoryWindow[i].DADitems[j][k], this._actor._actorId)
        }
        
        if (fc == false)
        {
          locked = true
        }
        else if (fc == true)
        {
          locked = false
        }
      }
      
      if ((TouchInput.isPressed() == true && (this._DADInventoryWindow[i].DADitems[j][k].itemtype == "item" && ( (this.situation == "Battle" && this._DADItemInfo.mode == "Battle") || this.situation == "Inventory") || (this.situation == "Selling" || this.situation == "ItemChoose")) && this.isstillpressed == false) && locked == false)
      {
        this.isstillpressed = true 
        this.DADitempointed = i
        this.DADmodulepointed = j
        this.onItemOk(i,j,k)
      }
    }


  this.coreReleaseChecking = function(i,j,k)
  {
    if (TouchInput.isPressed() == false && this.isstillpressed == true)
    {
      this.isstillpressed = false
    }
    if (i != undefined && this.situation == "Equipping" && this._DADInventoryWindow[i].DADitems[j][k].itemtype != "item" && ( (this._slotWindow._actor.equipSlots()[this._slotWindow.index()] == 1 && this._DADInventoryWindow[i].DADitems[j][k].itemtype == "weapon") || (this._slotWindow._actor.equipSlots()[this._slotWindow.index()] == $dataArmors[this._DADInventoryWindow[i].DADitems[j][k].dataid].etypeId && this._DADInventoryWindow[i].DADitems[j][k].itemtype == "armor") ) )
    {
      var actor = JsonEx.makeDeepCopy(this._itemWindow._actor);
      actor.forceChangeEquip(this._itemWindow._slotId, this._itemWindow.item());
      this._statusWindow.setTempActor(actor);
      this._statusWindow.refresh()
    }
  }

  this.coreRotationChecking = function()
  {
    if (Input.isPressed('ok') == true && this.tsample != null && this.grit != null && this.tsample.rotateble == true && this.rotated ==false) 
    {
      switch (this.tsample.direction)
      {
        case "up":
          this.tsample.direction = "right"
        break;
        case "right":
          this.tsample.direction = "down"
        break;
        case "down":
          this.tsample.direction = "left"
        break;
        case "left":
          this.tsample.direction = "up"
        break;
      }
      this.tsample.rotation = this.tsample.rotation + Math.PI/2
      this.rotated = true
    }
    if (Input.isPressed('ok') == false)
    {
      this.rotated = false
    }
  }

      this.coreNoneOneCellMoveAnalysis = function()
      {
        console.log("Объект не является одноклеточным") 
        var ohb = this._DADInventoryWindow[this.wp].DADcells[this.mp][this.pc]
        fc = logicProcessor(ohb, ohb.inputlogic, this.tsample, this._actor._actorId)
        if ((this._DADInventoryWindow[this.wp].DADcells[this.mp][this.pc].item == null || (this.grmod == this.mp && this.grcon == this.wp && this._DADInventoryWindow[this.wp].DADcells[this.mp][this.pc].item == this.grit)) && fc != false && this.cellSpriteCheck(this._DADInventoryWindow[this.wp].DADcells[this.mp][this.pc].sprite))
        {
          console.log("Клетка " + this.pc + " свободна")
          for (var g =0; g<this.tsample.cellwidth;g++)
          {
            console.log("Начинается горизонтальный цикл " + g)
            for (var m=0; m<this.tsample.celllength; m++)
            {
              console.log("Начинается вертикальный цикл " + m + " направление объекта " + this.tsample.direction)
              if (this.researchcell == undefined)
              {
                console.log("Не существует изучаемой клетки перенос невозможен")
                this.isfail = true
                m = this.tsample.celllength
                g = this.tsample.cellwidth
              }
              else
              {
                for (var t=0;t<this._DADInventoryWindow[this.wp].DADcells[this.mp].length;t++)
                {
                  if (this._DADInventoryWindow[this.wp].DADcells[this.mp][t].id == this.researchcell.id)
                  {
                    this.idup = t
                    t = this._DADInventoryWindow[this.wp].DADcells[this.mp].length
                  }
                }
                var ohb = this._DADInventoryWindow[this.wp].DADcells[this.mp][this.idup]
                fc = logicProcessor(ohb, ohb.inputlogic, this.tsample, this._actor._actorId)
                if ((this._DADInventoryWindow[this.wp].DADcells[this.mp][this.idup].item == null || (this.grcon == this.wp && this._DADInventoryWindow[this.wp].DADcells[this.mp][this.idup].item == this.grit)) && fc != false && this.cellSpriteCheck(this._DADInventoryWindow[this.wp].DADcells[this.mp][this.idup].sprite))
                {
                  console.log("Клетка " + this.idup + " существует и свободна")
                  this.allcells.push(this.idup)
                  this.idup = null
                  for (var t=0;t<this._DADInventoryWindow[this.wp].DADcells[this.mp].length;t++)
                  {
                    var trin
                    switch (this.tsample.direction)
                    {
                      case "up":
                        trin = this.researchcell.jointU
                      break;
                      case "right":
                        trin = this.researchcell.jointR
                      break;
                      case "down":
                        trin = this.researchcell.jointD
                      break;
                      case "left":
                        trin = this.researchcell.jointL
                      break;
                    }
                    if (this._DADInventoryWindow[this.wp].DADcells[this.mp][t].id == trin)
                    {
                      this.idup = t
                      t = this._DADInventoryWindow[this.wp].DADcells[this.mp].length
                    }
                  }
                  this.researchcell = this._DADInventoryWindow[this.wp].DADcells[this.mp][this.idup]
                  console.log("Определена следующая клетка " + this.idup)
                }
                else
                { 
                  console.log("Клетка " + this.idup + " занята объектом " + this._DADInventoryWindow[this.wp].DADcells[this.mp][this.idup].item + " перенос невозможен")
                  this.isfail = true
                  g = this.tsample.cellwidth
                  m = this.tsample.celllength
                }
              }
                    
              if (m == this.tsample.celllength-1 && g != this.tsample.cellwidth-1)
              {
                console.log("Начинаю переопределение следующей клетки горизонтальным переносом")
                if (this.researchforw != undefined)
                {
                  for (var t=0;t<this._DADInventoryWindow[this.wp].DADcells[this.mp].length;t++)
                  {
                    var trin = null
                    switch (this.tsample.direction)
                    {
                      case "up":
                        trin = this.researchforw.jointR
                      break;
                      case "right":
                        trin = this.researchforw.jointD
                      break;
                      case "down":
                        trin = this.researchforw.jointL
                      break;
                      case "left":
                        trin = this.researchforw.jointU
                      break;
                    }
                    if (this._DADInventoryWindow[this.wp].DADcells[this.mp][t].id == trin)
                    {
                      this.idup = t
                      t = this._DADInventoryWindow[this.wp].DADcells[this.mp].length
                      console.log("Переопределена следующая клетка " + this.idup + " она же будет новой клеткой для горизонтального переноса")
                    }
                  }
                  if (this._DADInventoryWindow[this.wp].DADcells[this.mp][this.idup] != undefined && this._DADInventoryWindow[this.wp].DADcells[this.mp][this.idup].item != null && (this.grcon != this.wp || this._DADInventoryWindow[this.wp].DADcells[this.mp][this.idup].item != this.grit))
                  {
                    console.log("Клетка " + this.idup + " занята объектом " + this._DADInventoryWindow[this.wp].DADcells[this.mp][this.idup].item + " перенос невозможен")
                    this.isfail = true
                    m=this.tsample.celllength
                    g=this.tsample.celllength
                  }
                }
                else
                {
                  console.log("Справа нет необходимой клетки перенос невозможен")
                  this.isfail = true
                }
              this.researchcell = this._DADInventoryWindow[this.wp].DADcells[this.mp][this.idup]
              this.researchforw = this._DADInventoryWindow[this.wp].DADcells[this.mp][this.idup]
              }
            }
          }
        }
        else
        {
          console.log("Клетка " + this.idup + " занята объектом " + this._DADInventoryWindow[this.wp].DADcells[this.mp][this.idup].item + " перенос невозможен")
          this.isfail = true
        }
      }

      this.cellSpriteCheck = function(sprite){
        csc.call(this)
        return this.check(this.tsample.itemtype, this.tsample.dataid, sprite)
      }

      this.coreOneCellMoveAnalysis = function() {
        var ohb = this._DADInventoryWindow[this.wp].DADcells[this.mp][this.pc]
        fc = logicProcessor(ohb, ohb.inputlogic, this.tsample, this._actor._actorId)
        if ((this._DADInventoryWindow[this.wp].DADcells[this.mp][this.pc].item == null || (this._DADInventoryWindow[this.wp].DADcells[this.mp][this.pc].item == this.grit && this.grcon == this.wp && this.mp != this.grmod)) && fc != false && this.cellSpriteCheck(this._DADInventoryWindow[this.wp].DADcells[this.mp][this.pc].sprite))
        {
          this.allcells = [this.pc]
        }
        else
        {
          this.isfail = true
          console.log("Клетка " + this.idup + " занята объектом " + this._DADInventoryWindow[this.wp].DADcells[this.mp][this.idup].item + " перенос невозможен")
        }
      }

      this.coreMovementTransaction = function() {
        console.log("Соблюдены все условия для переноса осуществляю транзакцию") 
        console.log("Был взят образец предмета оригинал изъят из массива контейнера " + this.grcon + " начинаю переопределение его занятых клеток")
        for (var n = this.grit;this.grit != "equip" && n<this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length;n++)
        {
          console.log("Обрабатываю объект " + n)
          for (var y=0; y<this._DADInventoryWindow[this.grcon].DADitems[this.grmod][n].allcells.length;y++)
          {
            console.log("Обрабатываю клетку " + y)
            this._DADInventoryWindow[this.grcon].DADcells[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod][n].allcells[y]].item -= 1
          }
        }

        console.log("Опустошаю старые клетки")
        for (var n=0; this.grit != "equip" && n<this.tsample.allcells.length;n++)
        {
          console.log("Опустошена клетка " + this.tsample.allcells[n])
          this._DADInventoryWindow[this.grcon].DADcells[this.grmod][this.tsample.allcells[n]].item = null
          if ((this.grcon != $gameParty._actors.length && DADPlugInfo.multibags == "true") || (this.grcon != 1 && DADPlugInfo.multibags == "false") && this.situation != "Shopping")
          {
            $gameParty.DADCells[$gameParty._actors[this.grcon]][this.grmod][this.tsample.allcells[n]].item = null
          }
          else if (this.grcon == this._DADInventoryWindow.length-1 && this.situation == "Chest")
          {
            $gameParty.DADChests[currentchest].cells[0][this.tsample.allcells[n]].item = null
          }
        }

        if (this.grit == "equip")
        {
          $gameActors.actor(this._slotWindow._actor._actorId).changeEquip(this._slotWindow.index(), 0)
          
          if (this.tsample.itemtype == "weapon")
            {note = $dataWeapons[this.tsample.dataid].note}
          else if (this.tsample.itemtype == "armor")
            {note = $dataArmors[this.tsample.dataid].note}

          moduleid = note.match(/<DADModule: (.*)>/i);
          if (moduleid != null)
          {
            this.refpls = true
            moduleid = moduleid[1]
            if (DADPlugInfo.multibags == "true")
            {
              DADPC.removeDADModuleByChar(this._slotWindow._actor._actorId, moduleid)
            }
            else
            {
              DADPC.removeDADModuleNoMulti(moduleid)
            }
          }
        }
      
        console.log("Образцу присвоены новые сведения о его клетках")
        this.tsample.allcells = this.allcells
      
        for (var n=0; n<this.allcells.length;n++)
        {
          console.log("Заполняю новые клетки " + this.allcells[n])
          this._DADInventoryWindow[this.wp].DADcells[this.mp][this.allcells[n]].item = this._DADInventoryWindow[this.wp].DADitems[this.mp].length
          if (this.wp != $gameParty._actors.length && this.situation != "Shopping" && this.situation != "Chest")
          {
            $gameParty.DADCells[$gameParty._actors[this.wp]][this.mp][this.allcells[n]].item = this._DADInventoryWindow[this.wp].DADitems[this.mp].length
          }
          else if (this.wp == this._DADInventoryWindow.length-1 && this.situation == "Chest")
          {
            $gameParty.DADChests[currentchest].cells[0][this.allcells[n]].item = this._DADInventoryWindow[this.wp].DADitems[this.mp].length
          }
        }
        
        this.obx = this._DADInventoryWindow[this.wp].DADcells[this.mp][this.pc].x
        this.oby = this._DADInventoryWindow[this.wp].DADcells[this.mp][this.pc].y
        switch (this.tsample.direction)
        {
          case "up":
            this.tsample.placex = this.obx
            this.tsample.placey = this.oby - (this.tsample.celllength - 1)*DADPlugInfo.cellsize
          break;
          case "right":
            this.tsample.placex = this.obx + this.tsample.celllength*DADPlugInfo.cellsize
            this.tsample.placey = this.oby
          break;
          case "down":
            this.tsample.placex = this.obx + DADPlugInfo.cellsize
            this.tsample.placey = this.oby + (this.tsample.celllength)*DADPlugInfo.cellsize
          break;
          case "left":
            this.tsample.placex = this.obx - ((this.tsample.celllength-1)*DADPlugInfo.cellsize)
            this.tsample.placey = this.oby + DADPlugInfo.cellsize
          break;
        }
        console.log("Присваиваю образцу основную клетку " + this.maincell.id + " и контейнер " + this.wp)
        console.log("--------------------------------------------")
        console.log()
        console.log("ОБЪЕКТ ВНЕСЕН В МАССИВ КОНТЕЙНЕРА " + this.wp + " НА ПОСЛЕДНЕЕ МЕСТО ТРАНЗАКЦИЯ ЗАВЕРШЕНА")
        console.log()
        console.log("--------------------------------------------")

        this._DADInventoryWindow[this.wp].DADitems[this.mp].push(this.tsample)
        this._DADInventoryWindow[this.wp].addChild(this._DADInventoryWindow[this.wp].DADitems[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1])
        this._DADInventoryWindow[this.wp].DADitems[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1].container = this.wp
        this._DADInventoryWindow[this.wp].DADitems[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1].placec = this.maincell.id
        this._DADInventoryWindow[this.wp].DADitems[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1].x = this._DADInventoryWindow[this.wp].DADitems[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1].placex
        this._DADInventoryWindow[this.wp].DADitems[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1].y = this._DADInventoryWindow[this.wp].DADitems[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1].placey
        this._DADInventoryWindow[this.wp].DADitems[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1].placed = this._DADInventoryWindow[this.wp].DADitems[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1].direction
        this._DADInventoryWindow[this.wp].DADitems[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1].maincell = this.maincell.id
        this._DADInventoryWindow[this.wp].DADitems[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1].winancorx = -this._DADInventoryWindow[this.wp].x
        this._DADInventoryWindow[this.wp].DADitems[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1].winancory = -this._DADInventoryWindow[this.wp].y
        
        if ( (this.wp != this._DADInventoryWindow.length-1 && this.situation != "Shopping") || (this.wp == this._DADInventoryWindow.length-1 && this.situation == "Equipping") )
        {
          var ebal = this._DADInventoryWindow[this.wp].DADitems[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1]
          $gameParty.DADitems[$gameParty._actors[this.wp]][this.mp].push({itemtype: ebal.itemtype, dataid: ebal.dataid, maincell: ebal.maincell, direction: ebal.direction})
        }

        this.reactionflag = false
        this._DADInventoryWindow[this.wp].DADitems[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1].judgeme = false
        
        var locked = true 
        for (var f = 0; locked == true && f < this._DADInventoryWindow[this.wp].DADitems[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1].allcells.length; f++)
        {
          var ohb = this._DADInventoryWindow[this.wp].DADcells[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1].allcells[f]]
          fc = logicProcessor(ohb, ohb.outputlogic, this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1, this._actor._actorId)
          if (fc != true)
          {
            locked = false
            this._DADInventoryWindow[this.wp].DADitems[this.mp][this._DADInventoryWindow[this.wp].DADitems[this.mp].length-1].locked = false
          }
        }
      }

      this.coreEquippingCheck = function(){
        if (this.reactionflag == true && this.situation == "Equipping" && TouchInput.x <= this._blankWindow.width && TouchInput.x >= this._blankWindow.x && TouchInput.y <= this._blankWindow.height + this._blankWindow.y && TouchInput.y >= this._blankWindow.y && this.grit != "equip" && this._blankWindow.DADitem == null && ( (this._slotWindow._actor.equipSlots()[this._slotWindow.index()] == 1 && this.tsample.itemtype == "weapon" && $gameActors.actor(this._slotWindow._actor._actorId).isAbleToEquip(this._slotWindow.index(), $dataWeapons[this.tsample.dataid]) == true ) || (this._slotWindow._actor.equipSlots()[this._slotWindow.index()] != 1 && this.tsample.itemtype == "armor" && $gameActors.actor(this._slotWindow._actor._actorId).isAbleToEquip(this._slotWindow.index(), $dataArmors[this.tsample.dataid]) == true ) ) ) 
                {
                  this.refpls = true
                  console.log("Соблюдены все условия для экипирования осуществляю транзакцию") 
                  console.log("Был взят образец предмета оригинал изъят из массива контейнера " + this.grit + " начинаю переопределение его занятых клеток")
                  
                  for (var n = this.grit;this.grit != "equip" && n<this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length;n++)
                  {
                    console.log("Обрабатываю объект " + n)
                    for (var y=0; y<this._DADInventoryWindow[this.grcon].DADitems[this.grmod][n].allcells.length;y++)
                    {
                      console.log("Обрабатываю клетку " + y)
                      this._DADInventoryWindow[this.grcon].DADcells[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod][n].allcells[y]].item -= 1
                    }
                  }
    
                  console.log("Опустошаю старые клетки")
                  for (var n=0; this.grit != "equip" && n<this.tsample.allcells.length;n++)
                  {
                    console.log("Опустошена клетка " + this.tsample.allcells[n])
                    this._DADInventoryWindow[this.grcon].DADcells[this.grmod][this.tsample.allcells[n]].item = null
                  }
                
                  this.tsample.allcells = []
                  
                  console.log("--------------------------------------------")
                  console.log()
                  console.log("ОБЪЕКТ ЭКИПИРОВАН")
                  console.log()
                  console.log("--------------------------------------------")
                  this._blankWindow.DADitem = this.tsample
                  this._blankWindow.addChild(this._blankWindow.DADitem)

                  this._blankWindow.DADitem.x = (this._blankWindow.width - (DADPlugInfo.cellsize * this._blankWindow.DADitem.cellwidth) ) / 2
                  this._blankWindow.DADitem.y = (this._blankWindow.height - (DADPlugInfo.cellsize * this._blankWindow.DADitem.celllength) ) / 2
                  this._blankWindow.DADitem.placex = this._blankWindow.DADitem.x
                  this._blankWindow.DADitem.placey = this._blankWindow.DADitem.y

                  this._blankWindow.DADitem.container = "equip"
                  this._blankWindow.DADitem.placec = "equip"

                  this._blankWindow.DADitem.placed = "up"
                  this._blankWindow.DADitem.direction = "up"
                  this._blankWindow.DADitem.rotation = 0
                  this._blankWindow.DADitem.maincell = "equip"
                  this._blankWindow.DADitem.winancorx = -this._blankWindow.x
                  this._blankWindow.DADitem.winancory = -this._blankWindow.y

                  if (this._blankWindow.DADitem.itemtype == "weapon")
                  {
                    $gameActors.actor(this._slotWindow._actor._actorId).changeEquip(this._slotWindow.index(), $dataWeapons[this._blankWindow.DADitem.dataid])
                    note = $dataWeapons[this._blankWindow.DADitem.dataid].note
                  }
                  else if(this._blankWindow.DADitem.itemtype == "armor")
                  {
                    $gameActors.actor(this._slotWindow._actor._actorId).changeEquip(this._slotWindow.index(), $dataArmors[this._blankWindow.DADitem.dataid])
                    note = $dataArmors[this._blankWindow.DADitem.dataid].note
                  }

                  moduleid = note.match(/<DADModule: (.*)>/i);
                  if (moduleid != null)
                  {
                    moduleid = moduleid[1]
                    if (DADPlugInfo.multibags == "true")
                    {
                      console.log(this._slotWindow._actor._actorId, moduleid)
                      DADPC.addDADModuleByChar(this._slotWindow._actor._actorId, moduleid)
                    }
                    else
                    {
                      DADPC.addDADModuleNoMulti(moduleid)
                    }
                  }
                  
                  this.reactionflag = false
                  this._blankWindow.DADitem.judgeme = false
                }
      }

      this.coreEmptyReaction = function(){
        if (this.reactionflag == true)
                {
                  this.refpls = true
                    console.log("--------------------------------------------")
                    console.log()
                    console.log("НЕ СОБЛЮДЕНЫ ВСЕ УСЛОВИЯ ПЕРЕНОСА ВОЗВРАЩАЮ ОБРАТНО")
                    console.log()
                    console.log("--------------------------------------------")

                    for (var n = this.grit;this.grit != "equip" && n<this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length;n++)
                      {
                        console.log("Обрабатываю объект " + n)
                        for (var y=0; y<this._DADInventoryWindow[this.grcon].DADitems[this.grmod][n].allcells.length;y++)
                        {
                          console.log("Обрабатываю клетку " + y)
                          this._DADInventoryWindow[this.grcon].DADcells[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod][n].allcells[y]].item -= 1
                        }
                      }

                      for (var n=0; this.grit != "equip" && n<this.tsample.allcells.length;n++)
                        {
                          console.log("Обновлена клетка " + this.tsample.allcells[n])
                          this._DADInventoryWindow[this.grcon].DADcells[this.grmod][this.tsample.allcells[n]].item = this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length
                          if (this.grcon != this._DADInventoryWindow.length-1)
                          {
                            $gameParty.DADCells[$gameParty._actors[this.grcon]][this.grmod][this.tsample.allcells[n]].item = this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length
                          }
                          else if (this.grcon == this._DADInventoryWindow.length-1 && this.situation == "Chest")
                          {
                            $gameParty.DADChests[currentchest].cells[0][this.tsample.allcells[n]].item = this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length
                          }
                        }


                    if (this.grit != "equip")
                    {
                      this._DADInventoryWindow[this.grcon].DADitems[this.grmod].push(this.tsample)
                      this.removeChild(this.tsample)
                      this._DADInventoryWindow[this.grcon].addChild(this._DADInventoryWindow[this.grcon].DADitems[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length-1])
                      this._DADInventoryWindow[this.grcon].DADitems[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length-1].x = this._DADInventoryWindow[this.grcon].DADitems[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length-1].placex
                      this._DADInventoryWindow[this.grcon].DADitems[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length-1].y = this._DADInventoryWindow[this.grcon].DADitems[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length-1].placey
                      this._DADInventoryWindow[this.grcon].DADitems[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length-1].direction = this._DADInventoryWindow[this.grcon].DADitems[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length-1].placed
                      this._DADInventoryWindow[this.grcon].DADitems[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length-1].winancorx = -this._DADInventoryWindow[this.grcon].x
                      this._DADInventoryWindow[this.grcon].DADitems[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length-1].winancory = -this._DADInventoryWindow[this.grcon].y
                      switch (this._DADInventoryWindow[this.grcon].DADitems[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length-1].direction)
                      {
                        case "up":
                          this._DADInventoryWindow[this.grcon].DADitems[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length-1].rotation = 0
                        break;
                        case "right":
                          this._DADInventoryWindow[this.grcon].DADitems[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length-1].rotation = Math.PI/2
                        break;
                        case "down":
                          this._DADInventoryWindow[this.grcon].DADitems[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length-1].rotation = Math.PI
                        break;
                        case "left":
                          this._DADInventoryWindow[this.grcon].DADitems[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length-1].rotation = (3*Math.PI)/2
                        break;
                      }

                      if ( (this.grcon != this._DADInventoryWindow.length-1 && this.situation != "Shopping") || (this.grcon == this._DADInventoryWindow.length-1 && this.situation == "Equipping") )
                      {
                        var ebal = this._DADInventoryWindow[this.grcon].DADitems[this.grmod][this._DADInventoryWindow[this.grcon].DADitems[this.grmod].length-1]
                        $gameParty.DADitems[$gameParty._actors[this.grcon]][this.grmod].push({itemtype: ebal.itemtype, dataid: ebal.dataid, maincell: ebal.maincell, direction: ebal.direction})
                      }
                    }
                    else
                    {
                      this._blankWindow.DADitem = this.tsample
                      this.removeChild(this.tsample)
                      this._blankWindow.addChild(this._blankWindow.DADitem)
                      this._blankWindow.DADitem.x = this._blankWindow.DADitem.placex
                      this._blankWindow.DADitem.y = this._blankWindow.DADitem.placey
                      this._blankWindow.DADitem.direction = "up"
                      this._blankWindow.DADitem.winancorx = -this._blankWindow.x
                      this._blankWindow.DADitem.winancory = -this._blankWindow.y
                      this._blankWindow.DADitem.rotation = 0
                    }
                    this.tsample.judgeme = false
                  }
      }

      this.runsyncupdate = async function(situation)
      {
        let AAAAAAA = new Promise((resolve, reject) => {
          setTimeout(() => resolve("done"), 50);
        }) 
        let response = await AAAAAAA
        this.corePrepare(situation)
        while (this.KYS == false)
          {
            this.wp = null
            this.pc = null
            let promise = new Promise((resolve, reject) => {
              setTimeout(() => resolve("done"), 50);
            }) 
            let response = await promise
            this.obx = TouchInput.x
            this.oby = TouchInput.y
            this.shash = false
    
            this.coreAimChecking()
            this.coreRotationChecking()
            
            if (this.tsample != null && this.tsample.judgeme == true)
            {
              this.reactionflag = true
              this.pc = null
              if (this.reactionflag == true)
              {
                console.log("Начинаем анализ переноса объекта из контейнера " + this.grcon + " модуля " + this.grmod + " под номером " + this.grit)
                this.obx = TouchInput.x
                this.oby = TouchInput.y 
                console.log("Ищем клетку и контейнер")
                for (var e = 0; e<this._DADInventoryWindow.length;e++)
                {
                  console.log("Открываем контейнер " + e)
                  for (var i=0; i < this._DADInventoryWindow[e].DADcells.length; i++)
                  {
                    for (var j=0; j < this._DADInventoryWindow[e].DADcells[i].length; j++)
                    {
                      if (this._DADInventoryWindow[e] != undefined && this._DADInventoryWindow[e].DADcells[i][j].isCursorOnItem() == true && this._DADInventoryWindow[e].DADcells[i][j].visible == true && this._DADInventoryWindow[e].DADcells[i][j].parent.visible == true)
                      {
                        this.pc = j
                        this.mp = i
                        this.wp = e
                        console.log("Определен контейнер " + this.wp + " модуль " + this.mp + " и клетка " + this.pc)
                        break
                      }
                    }
                  }
                  if (this.wp != null)
                  {
                    break
                  }
                }
                if (this.pc != null)
                {
                  this.isfail = false
                  this.maincell = this._DADInventoryWindow[this.wp].DADcells[this.mp][this.pc]
      
                  this.allcells = []
                  this.idup = this.pc
                  
                  this.researchcell = this._DADInventoryWindow[this.wp].DADcells[this.mp][this.pc]
                  this.researchforw = this._DADInventoryWindow[this.wp].DADcells[this.mp][this.pc]
                  var moduleid = null
                  if (this.tsample.itemtype == "weapon")
                    {note = $dataWeapons[this.tsample.dataid].note}
                  else if (this.tsample.itemtype == "armor")
                    {note = $dataArmors[this.tsample.dataid].note}
                  if (this.tsample.itemtype != "item")
                  {moduleid = note.match(/<DADModule: (.*)>/i);}
                  var heybro = true
                  if (moduleid != null && this.situation == "Equipping")
                  {
                    moduleid = moduleid[1]
                    var key = 1
                    if (DADPlugInfo.multibags == "true")
                      {key = $gameParty._actors[this.wp]}
                    yey = getElementNumberById($gameParty.DADmodules[key], moduleid)
                    if ($gameParty.DADmodules[key][this.mp].id == moduleid || (yey != null && $gameParty.DADitems[key][yey].length != 0))
                    {
                      heybro = false
                    }
                  }

                  if (this.tsample.celllength == 1 && this.tsample.cellwidth == 1 && heybro)
                  {
                    this.coreOneCellMoveAnalysis()
                  }
                  else if (heybro)
                  {
                    this.coreNoneOneCellMoveAnalysis()
                  }
                  if (this.isfail == false && heybro == true)
                  {
                    this.coreMovementTransaction()
                    this.refpls = true
                  }
                }
                else 
                {
                  console.log("Нет цели")
                }
              }

              this.coreEquippingCheck()
              this.coreEmptyReaction()

              var key = 1 
              for (var i=0; this.refpls == true && this.situation != "Shopping" && this.situation != "Chest" && ( (i<this._DADInventoryWindow.length && DADPlugInfo.multibags == "true") || i<1 ); i++)
              {
                if (DADPlugInfo.multibags == "true")
                {key = $gameParty._actors[i]}
                positionsx = []
                positionsy = []
                makets = []
                mpx = []
                mpy = []
                for (var j=0; j<$gameParty.DADmodules[$gameParty._actors[i]].length;j++)
                {
                  positionsx.push(toNumber($gameParty.DADmodules[key][j].x))
                  positionsy.push(toNumber($gameParty.DADmodules[key][j].y))
                  makets.push($gameParty.DADmodules[key][j].maket)
                  mpx.push(toNumber($gameParty.DADmodules[key][j].maketShiftX))
                  mpy.push(toNumber($gameParty.DADmodules[key][j].maketShiftY))
                }
                this._DADInventoryWindow[i].refresh($gameParty.DADCells[key], $gameParty.DADitems[key], key, false, positionsx, positionsy, makets, mpx, mpy)
                if (this._itemWindow != undefined)
                {this._itemWindow.refresh()}
                if (this._slotWindow != undefined)
                {this._slotWindow.refresh()}
              }

              this.reactionflag = false
              this.grcon = null
              this.grmod = null
              this.grit = null
              this.tsample = null
              this.refpls = false

              
            }
          }
        }
      }



// =====================================
//
//       CORE HIGH TIER TOOLS
//
// =====================================


    createContainerCellsUni = function () {
      this.create = function (cells, positionsx, positionsy, makets, mpx, mpy) {
      newcells = cells
      this.makets = []
      this.DADcells = []
      for (var j = 0; j < newcells.length; j++)
      {
        minrfm = newcells[j][0].row
        mincfm = newcells[j][0].column
        for (var i = 0; i < newcells[j].length; i++)
        {
          if (minrfm > newcells[j][i].row)
          {minrfm = newcells[j][i].row}
          if (mincfm > newcells[j][i].column)
          {mincfm = newcells[j][i].column}
        }

        newmaket = new Sprite()
        if (makets != undefined && makets[j] != "" && makets[j] != undefined) 
        {
          newmaket.bitmap = ImageManager.loadDG7DADMAK(makets[j]);
        }
        newmaket.setFrame(0, 0, 99999, 99999);
        newmaket.visible = true;
        newmaket.x = (this.width/2) + positionsx[j] + mpx[j] + (mincfm*DADPlugInfo.cellsize)
        newmaket.y = (this.height/2) + positionsy[j] + mpy[j] + (minrfm*DADPlugInfo.cellsize)
        newmaket.anchor.x = 0;
        newmaket.anchor.y = 0;
        this.makets.push(newmaket)
        this.addChild(this.makets[j])
        this.DADcells.push([])
        for (var i=0; i<newcells[j].length;i++)
        {
          var newcellV = newcells[j][i]
          sprite = newcellV.sprite
          if (sprite == undefined)
          {sprite = 0}
          var newcell = new DADCell(newcellV.id, sprite, this.x, this.y)
          newcell.jointU = newcellV.jointU
          newcell.jointR = newcellV.jointR
          newcell.jointD = newcellV.jointD
          newcell.jointL = newcellV.jointL
          newcell.inputlogic = newcellV.inputlogic
          newcell.outputlogic = newcellV.outputlogic
          newcell.ItemOkInvLogic = newcellV.ItemOkInvLogic
          newcell.ItemOkBattleLogic = newcellV.ItemOkBattleLogic
          newcell.anchor.x = 0;
          newcell.anchor.y = 0;
          newcell.x = (this.width/2) + positionsx[j] + (newcellV.column*DADPlugInfo.cellsize)
          newcell.y = (this.height/2) + positionsy[j] + (newcellV.row*DADPlugInfo.cellsize)
          this.DADcells[j].push(newcell)
          this.addChild(this.DADcells[j][i])
        }
      }
    }
  }
  
  

    FillContainerUni = function (container, con, locked) {
      this.fill = function(container, con, locked) {
      var x = 0
      var y = 0
      var idup
      this.DADitems = []
      for (var u = 0; u < container.length; u++)
      {
        this.DADitems.push([])
        for (var i=0; i<container[u].length;i++)
        {
            switch (container[u][i].itemtype)
            {
              case "item":
                spritename = "DADItemSprites"
              break;
              case "weapon":
                spritename = "DADWeaponSprites"
              break;
              case "armor":
                spritename = "DADArmorSprites"
              break;
            }
            var idup = getElementNumberById(this.DADcells[u], container[u][i].maincell)
            x = this.DADcells[u][idup].x
            y = this.DADcells[u][idup].y
            researchcell = this.DADcells[u][idup]
            researchforw = this.DADcells[u][idup]
            
            var newitem = new DADItem(container[u][i].itemtype, container[u][i].dataid, container[u][i].maincell, container[u][i].direction, x, y, spritename, con, u, -this.x, -this.y, locked)

            var newallcells = []
            newitem.anchor.x = 0;
            newitem.anchor.y = 0;
            newitem.setFrame(newitem.shiftx*DADPlugInfo.cellsize, newitem.shifty*DADPlugInfo.cellsize, newitem.cellwidth*DADPlugInfo.cellsize , newitem.celllength*DADPlugInfo.cellsize);
            
            this.DADitems[u].push(newitem)
            this.addChild(this.DADitems[u][this.DADitems[u].length-1])

            this.DADcells[u][idup].item = i
            if (this.DADitems[u][i].celllength != 1 || this.DADitems[u][i].cellwidth != 1)
            {
              for (var g =0; g<this.DADitems[u][i].cellwidth;g++)
              {
                for (var m=0; m<this.DADitems[u][i].celllength; m++)
                {
                  if (researchcell != undefined)
                  {
                    idup = getElementNumberById(this.DADcells[u], researchcell.id)
                    this.DADcells[u][idup].item = i
                    newallcells.push(idup)
                    for (var t=0;t<this.DADcells[u].length;t++)
                    {
                      switch (this.DADitems[u][i].direction)
                      {
                        case "up":
                          if (this.DADcells[u][t].id == researchcell.jointU)
                          {
                            idup = t
                            t = this.DADcells[u].length
                          }
                        break;
                        case "right":
                          if (this.DADcells[u][t].id == researchcell.jointR)
                          {
                            idup = t
                            t = this.DADcells[u].length
                          }
                        break;
                        case "down":
                          if (this.DADcells[u][t].id == researchcell.jointD)
                          {
                            idup = t
                            t = this.DADcells[u].length
                          }
                        break;
                        case "left":
                          if (this.DADcells[u][t].id == researchcell.jointL)
                          {
                            idup = t
                            t = this.DADcells[u].length
                          }
                        break;
                      }
                    }
                    researchcell = this.DADcells[u][idup]
                  }
                  if (m == this.DADitems[u][i].celllength-1 && g != this.DADitems[u][i].cellwidth-1)
                  {
                    if (researchforw != undefined)
                    {
                      for (var t=0;t<this.DADcells[u].length;t++)
                      {
                        switch (this.DADitems[u][i].direction)
                        {
                          case "up":
                            if (this.DADcells[u][t].id == researchforw.jointR)
                            {
                              idup = t
                              t = this.DADcells[u].length
                            }
                          break;
                          case "right":
                            if (this.DADcells[u][t].id == researchforw.jointD)
                            {
                              idup = t
                              t = this.DADcells[u].length
                            }
                          break;
                          case "down":
                            if (this.DADcells[u][t].id == researchforw.jointL)
                            {
                              idup = t
                              t = this.DADcells[u].length
                            }
                          break;
                          case "left":
                            if (this.DADcells[u][t].id == researchforw.jointU)
                            {
                              idup = t
                              t = this.DADcells[u].length
                            }
                          break;
                        }
                      }
                    }
                    researchcell = this.DADcells[u][idup]
                    researchforw = this.DADcells[u][idup]
                  }
                }
              }
            }
            else
            {
              var fuck = getElementNumberById(this.DADcells[u],this.DADitems[u][i].maincell)
              newallcells = [fuck]
            }
            this.DADitems[u][i].allcells = newallcells
            if (locked == false)
              {
                for (var f = 0; locked == false && f < this.DADitems[u][i].allcells.length; f++)
                {
                  var ohb = this.DADcells[u][this.DADitems[u][i].allcells[f]]
                  var actorforlog = undefined
                  if (u <= $gameParty._actors.length)
                  {actorforlog = $gameParty._actors[u]}
                  fc = logicProcessor(ohb, ohb.outputlogic, this.DADitems[u][i], actorforlog)
                  if (fc == false)
                  {
                    locked = true
                  }
                }
              }
              this.DADitems[u][i].locked = locked
          }
        }
      }
    }


    createCellsSimulation = function(contype, chestid) {
      DADcells = []
      var newcells = []
      if (contype == "Inventory")
      {
        newcells = $gameParty.DADCells
      }
      else
      {
        newcells = $gameParty.DADChests[chestid].cells
      }
      
      for (var i=0; i<chesth*chestw;i++)
      {
          centerx = this.width/2
          centery = this.height/2
    
          var newcell = newcells[i]
    
          DADcells.push(newcell)
      }
      return DADcells
    }

    Game_Actor.prototype.tradeItemWithParty = function(newItem, oldItem) {
      if (newItem && !$gameParty.hasItem(newItem)) {
          return false;
      } else {
          $gameParty.gainItemOld(oldItem, 1);
          $gameParty.loseItemOld(newItem, 1);
          return true;
      }
  };

    var DM = Game_Party.prototype.initialize;
  Game_Party.prototype.initialize = function() {
    DM.call(this);
    var newcells
    var gx
    var gy
    if (DADPlugInfo.multibags == "true")
    {
      this.DADCells = [null]
      this.DADitems = [null]
      this.DADmodules = [null]
      this.BaseModuleRef = [null]
      for (var i = 1; i< $dataActors.length;i++)
      {
        this.DADitems.push([ [] ])

        str = $dataActors[i].note
        gm = str.match(/<DADBaseModule: (.*)>/i);
        if (gm != null)
        {
          idup = getElementNumberById($dataDADModules, gm[1])
          he = $dataDADModules[idup].Height
          wi = $dataDADModules[idup].Width
          gridid = $dataDADModules[idup].ComplexGridId
          gridmode = $dataDADModules[idup].ModGridmode
          source = 2
          this.DADmodules.push([$dataDADModules[idup]])
        }
        else
        {
          str = $dataClasses[($dataActors[i].classId)].note
          gm = str.match(/<DADBaseModule: (.*)>/i);
          if (gm != null)
          {
            idup = getElementNumberById($dataDADModules, gm[1])
            he = $dataDADModules[idup].Height
            wi = $dataDADModules[idup].Width
            gridid = $dataDADModules[idup].ComplexGridId
            gridmode = $dataDADModules[idup].ModGridmode
            source = 2
            this.DADmodules.push([$dataDADModules[idup]])
          }
          else
          {
            idup = getElementNumberById($dataDADModules, DADPlugInfo.gridid)
            he = $dataDADModules[idup].Height
            wi = $dataDADModules[idup].Width
            gridid = $dataDADModules[idup].ComplexGridId
            gridmode = $dataDADModules[idup].ModGridmode
            source = 2
            this.DADmodules.push([$dataDADModules[idup]])
          }
        }
        if (gridmode == "Simplex")
        {
          newcells = GetSimplexGrid(he, wi)
        }
        else
        {
          newcells = GetComplexGrid(gridid)
        }
        this.DADCells.push([newcells])
        this.BaseModuleRef.push($dataDADModules[idup])
      }
    }
    else
    {
      newcells = null
      var daidup = getElementNumberById($dataDADModules, DADPlugInfo.gridid)
      if (daidup != null)
      {

      }

      if ($dataDADModules[daidup].ModGridmode == "Simplex")
      {
        newcells = GetSimplexGrid($dataDADModules[daidup].Height, $dataDADModules[daidup].Width)
      }
      else
      {
        newcells = GetComplexGrid($dataDADModules[daidup].ComplexGridId)
      }
      this.DADCells = [null, [newcells]]
      this.BaseModuleRef = [null, $dataDADModules[daidup]]
      this.DADitems = [null, [ [] ] ]
      this.DADmodules = [null, [$dataDADModules[daidup]]]
    }
    this.DADChests = []
  };

  Game_Party.prototype.gainItemOld = function(item, amount, includeEquip) {
    var container = this.itemContainer(item);
    if (container) {
        var lastNumber = this.numItems(item);
        var newNumber = lastNumber + amount;
        container[item.id] = newNumber.clamp(0, this.maxItems(item));
        if (container[item.id] === 0) {
            delete container[item.id];
        }
        if (includeEquip && newNumber < 0) {
            this.discardMembersEquip(item, -newNumber);
        }
        $gameMap.requestRefresh();
    }
  };

Game_Party.prototype.loseItemOld = function(item, amount, includeEquip) {
  this.gainItemOld(item, -amount, includeEquip);
};

Game_Party.prototype.gainItem = function(item, amount, includeEquip) {
  if (typeof item == "object" && item != null)
  {
  if (amount < 0)
  {
    this.loseItem(item, amount, includeEquip)
  }
  else
  {
    this.gainItemOld(item, amount, includeEquip)
    var itemtype = "item"
    if (item.atypeId != undefined)
    {itemtype = "armor"}
    else if (item.wtypeId != undefined)
    {itemtype = "weapon"}
    if (DADPlugInfo.multibags == "false")
    {
      DADPC.addDADItemInInvNoMulti(itemtype, item.id)
    }
    else
    {
      for (var i = 1; i < $gameParty._actors.length; i++)
      {
        for (var j = 0; j < $gameParty.DADCells[$gameParty._actors[i]].length; j++)
        verdict = isItemCanBePlacedUniversal($gameParty.DADCells[$gameParty._actors[i]][j], itemtype, item.id, $gameParty._actors[i])
        if (verdict)
        {
          DADPC.addDADItemInInvByPM(itemtype, item.id, i)
          i = $gameParty._actors.length
        }
      }
    }
   }
  }
};

Game_Party.prototype.loseItem = function(item, amount, includeEquip) {
  if (typeof item == "object" && item != null)
  {
  var itemtype = "item"
  if (item.atypeId != undefined)
  {itemtype = "armor"}
  else if (item.wtypeId != undefined)
  {itemtype = "weapon"}
  if (DADPlugInfo.multibags == "false")
  {
    DADPC.removeDADItemFromInvNoMulti(itemtype, item.id)
  }
  else
  {
    for (var i = 0; i < $gameParty._actors.length; i++)
    {
      for (var j = 0; j < $gameParty.DADCells[$gameParty._actors[i]].length; j++)
      verdict = DADPC.isUniHaveDADItem(itemtype, item.id, $gameParty._actors[i])
      if (verdict == true)
      {
        DADPC.removeDADItemFromInvByPM(itemtype, item.id, i)
        i = $gameParty._actors.length
      }
    }
    }
  }
};

  GetSimplexGrid = function(chesth, chestw){
    cellsForReturn = []
    chesth = toNumber(chesth)
    chestw = toNumber(chestw)
    for (var i=0; i<chesth*chestw;i++)
    {
      var newcell = {id: i, jointU: null, jointR: null, jointD: null, jointL: null, item: null, ismaincell: false, x: null, y: null}
      newcell.column = (i%chestw) - chestw/2
      newcell.row = Math.floor(i / chestw) - chesth/2
      if ((i%chestw)-1>=0)
      {
        newcell.jointL = i-1;
      }
      if ((i%chestw)+1 < chestw)
      {
        newcell.jointR = i+1;
      }
      if (i-chestw>=0)
      {
        newcell.jointU = i- chestw;
      }
      if (i+chestw<chesth*chestw)
      {
        newcell.jointD = i+chestw;
      }
      newcell.inputlogic = "return true;"
      newcell.outputlogic = "return true;"
      newcell.ItemOkInvLogic = "return;"
      newcell.ItemOkBattleLogic = "return;"
      cellsForReturn.push(newcell)
      cellsForReturn[i].item = null
      cellsForReturn[i].ismaincell = false
    }
    return cellsForReturn
  }

  GetComplexGrid = function(id){
    var idup = null
    for (var i = 0; i < $dataDADComplexGrids.length; i++)
    {
      if ($dataDADComplexGrids[i].id == id)
      {
        idup = i
        i = $dataDADComplexGrids.length
      }
    }
    cellsForReturn = $dataDADComplexGrids[idup].cells
    for (var i = 0; i < cellsForReturn.length; i++)
    {
      cellsForReturn[i].item = null
      cellsForReturn[i].ismaincell = false
    }
    return cellsForReturn
  }

  GetComplexGridByModule = function(id){
    var idup = null
    for (var i = 0; i < $dataDADModules.length; i++)
    {
      if ($dataDADModules[i].id == id)
      {
        idup = i
        i = $dataDADModules.length
      }
    }
    for (var i = 0; i < $dataDADComplexGrids.length; i++)
    {
      if ($dataDADComplexGrids[i].id == $dataDADModules[idup].ComplexGridId)
      {
        idup = i
        i = $dataDADComplexGrids.length
      }
    }
    cellsForReturn = $dataDADComplexGrids[idup].cells
    for (var i = 0; i < cellsForReturn.length; i++)
    {
      cellsForReturn[i].item = null
      cellsForReturn[i].ismaincell = false
    }
    return cellsForReturn
  }

  csc = function(itemtype, dataid, sprite){
    this.check = function (itemtype, dataid, sprite){
      switch (itemtype)
      {
      case "item":
        var itemnote = $dataItems[dataid].note
      break;
      case "weapon":
        var itemnote = $dataWeapons[dataid].note
      break;
      case "armor":
        var itemnote = $dataArmors[dataid].note
      break;
      }
      var allowed = itemnote.match(/<DADAllowedCellSprites: (.*)>/i);
      if (allowed != null)
      {
        allowed = allowed[1].split(" ")
        var verdict = false
        for (var i = 0; i < allowed.length; i++)
        {
          if (allowed[i] == sprite)
          {verdict = true}
        }
        return verdict
      }
      else
      {
        var forbidden = itemnote.match(/<DADForbiddenCellSprites: (.*)>/i);
        if (forbidden != null)
        {
          forbidden = forbidden[1].split(" ")
          for (var i = 0; i < forbidden.length; i++)
          {
            if (forbidden[i] == sprite)
            {return false}
          }
        }
      }
      return true
    }
  }

  isItemCanBePlacedUniversal = function(cells, itemtype, dataid, actor) {
    switch (itemtype)
    {
      case "item":
        str = $dataItems[dataid].note
      break;
      case "weapon":
        str = $dataWeapons[dataid].note
      break;
      case "armor":
        str = $dataArmors[dataid].note
      break;
    }
    celllength = str.match(/<DADcelllength: (.*)>/i);
    cellwidth = str.match(/<DADcellwidth: (.*)>/i);
    if (celllength != null)
    {
      celllength = toNumber(celllength[1])
    }
    else
    {
      celllength = 1
    }
    if (cellwidth != null)
    {
      cellwidth = toNumber(cellwidth[1])
    }
    else
    {
      cellwidth = 1
    }
    var choosedconf = null
    var trin = null
    var dir = ["up", "right", "down", "left"]
    for (var i = 0; i < cells.length; i++)
    {
      for (var j = 0; j<4; j++)
      {
        var researchcell = cells[i]
        var researchforw = cells[i]
        var isfailedcycle = false
        var claimedcells = []
        for (var n = 0; isfailedcycle == false && n<cellwidth; n++)
        {
          for (var m=0; m<celllength;m++)
          {
            this.idup = null
            if (researchcell != undefined)
            {this.idup = getElementNumberById(cells, researchcell.id)}
            if(this.idup != null)
            {mleb = function(itemtype, dataid, sprite){csc.call(this);return this.check(itemtype, dataid, sprite)}}
            var ohb = cells[i]
            fc = logicProcessor(ohb, ohb.inputlogic, {itemtype: itemtype, dataid: dataid, direction: dir[j]}, actor)
            if (researchcell == undefined || this.idup == null || cells[this.idup].item != null || mleb(itemtype, dataid, cells[this.idup].sprite) == false || fc == false)
            {
              m = celllength
              n = cellwidth
              isfailedcycle = true
            }
            else
            {
              claimedcells.push(this.idup)
              switch (dir[j])
              {
                case "up":
                  trin = researchcell.jointU
                break;
                case "right":
                  trin = researchcell.jointR
                break;
                case "down":
                  trin = researchcell.jointD
                break;
                case "left":
                  trin = researchcell.jointL
                break;
              }
              this.idup = getElementNumberById(cells, trin)
              researchcell = cells[this.idup]
            }
          }
          if (researchforw != undefined)
          {
            switch (dir[j])
            {
              case "up":
                trin = researchforw.jointR
              break;
              case "right":
                trin = researchforw.jointD
              break;
              case "down":
                trin = researchforw.jointL
              break;
              case "left":
                trin = researchforw.jointU
              break;
            }
            this.idup = getElementNumberById(cells, trin)
            researchcell = cells[this.idup]
            researchforw = cells[this.idup] 
          }
          
        }
        if (isfailedcycle == false)
        {
          choosedconf = {cell: cells[i].id, direction: dir[j], claimedcells: claimedcells}
          j = 4
          i = cells.length
        }
      }
    }
    return choosedconf
  }

  createPartyDADInvWindows = function(x,y,w,h,locked)
  {
    this.yes = function(x,y,w,h,locked)
    {
      this._DADInventoryWindow = []
      var key = 1
      for (var i=0; (i<$gameParty._actors.length && DADPlugInfo.multibags == "true") || i<1; i++)
      {
        if (DADPlugInfo.multibags == "true")
        {key = $gameParty._actors[i]}
        positionsx = []
        positionsy = []
        makets = []
        mpx = []
        mpy = []
        for (var j=0; j<$gameParty.DADmodules[key].length ;j++)
        {
          positionsx.push(toNumber($gameParty.DADmodules[key][j].x))
          positionsy.push(toNumber($gameParty.DADmodules[key][j].y))
          makets.push($gameParty.DADmodules[key][j].maket)
          mpx.push(toNumber($gameParty.DADmodules[key][j].maketShiftX))
          mpy.push(toNumber($gameParty.DADmodules[key][j].maketShiftY))
        }
        this._DADInventoryWindow.push(new Window_Grid(x,y,w,h, $gameParty.DADCells[key], $gameParty.DADitems[key], i, locked, positionsx, positionsy, makets, mpx, mpy))
        this.addWindow(this._DADInventoryWindow[i]);
        this._DADInventoryWindow[i].hide()
      }
      this._DADInventoryWindow[0].show()
    }
  }

  previousAct = function()
  {
    this.Pact = function()
    {
      this._DADInventoryWindow[this.pointedactor].hide()
      this.pointedactor = this.pointedactor - 1
      if (this.pointedactor == -1)
      {
        this.pointedactor = $gameParty._actors.length - 1
      }
      this._DADItemInfo.refresh("clear")
      this._DADInventoryWindow[this.pointedactor].show()
      this._DADItemInfo.activate()
    }
  }
  nextAct = function()
  {
    this.Nact = function()
    {
      this._DADInventoryWindow[this.pointedactor].hide()
      this.pointedactor = this.pointedactor + 1
      if (this.pointedactor == $gameParty._actors.length)
      {
        this.pointedactor = 0
      }
      this._DADItemInfo.refresh("clear")
      this._DADInventoryWindow[this.pointedactor].show()
      this._DADItemInfo.activate()
    }
  }

// =================================================
//
//         SCENES AND WINDOWS
//
// =================================================




    function Scene_DADChest() {
      this.initialize.apply(this, arguments);
      }
      
      Scene_DADChest.prototype = Object.create(Scene_MenuBase.prototype);
      Scene_DADChest.prototype.constructor = Scene_DADChest;
      
      Scene_DADChest.prototype.initialize = function() {
        Scene_MenuBase.prototype.initialize.call(this);
      };
      
      Scene_DADChest.prototype.create = function() {
          Scene_MenuBase.prototype.create.call(this);
          this.createWindows()
          this.syncupdate()
      };
      
      Scene_DADChest.prototype.createWindows = function() {
      this._DADItemInfo = new Window_DADInfo
      this.addWindow(this._DADItemInfo)
      this.pointedactor = 0
      if (DADPlugInfo.multibags == "true")
      {
        this._DADItemInfo.setHandler('pagedown', this.nextAct.bind(this));
        this._DADItemInfo.setHandler('pageup',   this.previousAct.bind(this));
      }
      this.createPartyDADInvWindows(0, this._DADItemInfo.height, Graphics.boxWidth/2, Graphics.boxHeight - this._DADItemInfo.height, false)

      this._DADInventoryWindow.push(new Window_Grid(Graphics.boxWidth/2, this._DADItemInfo.height, Graphics.boxWidth/2, Graphics.boxHeight - this._DADItemInfo.height , $gameParty.DADChests[currentchest].cells, $gameParty.DADChests[currentchest].items, this._DADInventoryWindow.length, false, $gameParty.DADChests[currentchest].x, $gameParty.DADChests[currentchest].y, $gameParty.DADChests[currentchest].maket, $gameParty.DADChests[currentchest].sx, $gameParty.DADChests[currentchest].sy))
      this._DADItemInfo.setHandler('cancel', this.exitFromThisShit.bind(this));
      this.addWindow(this._DADInventoryWindow[this._DADInventoryWindow.length-1])
      this._DADItemInfo.activate()
      };
      
      Scene_DADChest.prototype.exitFromThisShit = function() {
      var key = 1
      for (var i = 0; (i < $gameParty._actors.length && DADPlugInfo.multibags == "true") || (i<1); i++)
      {
        if (DADPlugInfo.multibags == "true")
        {key = $gameParty._actors[i]}
        $gameParty.DADitems[key] = []
        for (var j = 0; j < $gameParty.DADmodules[key].length; j++)
        {
          $gameParty.DADitems[key].push([])
        }
      }
      $gameParty.DADChests[currentchest].items = [[]]
      $gameParty._items = {}
      $gameParty._weapons = {}
      $gameParty._armors = {}
      key = 1
      for (var j = 0; j < this._DADInventoryWindow.length-1; j++)
      {
        if (DADPlugInfo.multibags == "true")
        {key = $gameParty._actors[j]}
        for (var i = 0; i < this._DADInventoryWindow[j].DADitems.length;i++)
        {
          for (var k = 0; k < this._DADInventoryWindow[j].DADitems[i].length; k++)
          {
            $gameParty.DADitems[key][i].push({itemtype: this._DADInventoryWindow[j].DADitems[i][k].itemtype, dataid: this._DADInventoryWindow[j].DADitems[i][k].dataid, maincell: this._DADInventoryWindow[j].DADitems[i][k].maincell, direction: this._DADInventoryWindow[j].DADitems[i][k].direction})
            switch ($gameParty.DADitems[key][i][k].itemtype)
            {
            case "item":
                $gameParty.gainItemOld($dataItems[$gameParty.DADitems[key][i][k].dataid], 1)
            break;
            case "weapon":
                $gameParty.gainItemOld($dataWeapons[$gameParty.DADitems[key][i][k].dataid], 1)
            break;
            case "armor":
                $gameParty.gainItemOld($dataArmors[$gameParty.DADitems[key][i][k].dataid], 1)
            break;
            }
          }
        }
        for (var i = 0; i < this._DADInventoryWindow[j].DADcells.length;i++)
        {
          for (var k = 0; k < this._DADInventoryWindow[j].DADcells[i].length; k++)
          {
            $gameParty.DADCells[key][i][k].item = this._DADInventoryWindow[j].DADcells[i][k].item
          }
        }
      }
      for (var i = 0; i < this._DADInventoryWindow[this._DADInventoryWindow.length - 1].DADitems[0].length;i++)
      {
          $gameParty.DADChests[currentchest].items[0].push({itemtype: this._DADInventoryWindow[this._DADInventoryWindow.length - 1].DADitems[0][i].itemtype, dataid: this._DADInventoryWindow[this._DADInventoryWindow.length - 1].DADitems[0][i].dataid, maincell: this._DADInventoryWindow[this._DADInventoryWindow.length - 1].DADitems[0][i].maincell, direction: this._DADInventoryWindow[this._DADInventoryWindow.length - 1].DADitems[0][i].direction})
      }
      this.KYS = true
      SceneManager.pop()
      };
      
      Scene_DADChest.prototype.syncupdate = function () {
      syncupdateUni.call(this)
      this.runsyncupdate("Chest")
      }
      
      Scene_DADChest.prototype.removeFromArray = function (arr, num)
      {
      newarr = []
      for (var i=0; i < arr.length;i++)
      {
          if (i != num)
          {
          newarr.push(arr[i])
          }
      }
      return newarr
      }

      Scene_DADChest.prototype.nextAct = function ()
      {
        nextAct.call(this)
        this.Nact()
      }

      Scene_DADChest.prototype.previousAct = function ()
      {
        previousAct.call(this)
        this.Pact()
      }

      Scene_DADChest.prototype.createPartyDADInvWindows = function (x,y,w,h,locked)
      {
        createPartyDADInvWindows.call(this)
        this.yes(x,y,w,h,locked)
      }

      




      
      var _Scene_Item_create = Scene_Item.prototype.create;
      Scene_Item.prototype.create = function() {
        _Scene_Item_create.call(this);
    
        this.removeStandartWindows();
        this.CreateMainWindow();
    
        this.cellpointed = null
        this.itempointed = null
        this.createActorWindow();
        this.syncupdate();
      };
      
      Scene_Item.prototype.removeStandartWindows = function() {
        this._categoryWindow.deactivate()
        this._itemWindow.setCategory('item')
        this._itemWindow.makeItemList()
        this._itemWindow.hide()
        this._categoryWindow.hide()
      };
      
      Scene_Item.prototype.CreateMainWindow = function() {
        this.pointedactor = 0
        this._DADItemInfo = new Window_DADInfo()
        this._DADItemInfo.setHandler('cancel', this.exitFromThisShit.bind(this));
        if (DADPlugInfo.multibags == "true")
        {
          this._DADItemInfo.setHandler('pagedown', this.nextAct.bind(this));
          this._DADItemInfo.setHandler('pageup',   this.previousAct.bind(this));
        }
        this.addWindow(this._DADItemInfo);
        this.createPartyDADInvWindows(0, this._DADItemInfo.height, Graphics.boxWidth, Graphics.boxHeight - this._DADItemInfo.height,true)
      }
      
      Scene_Item.prototype.onActorOk = function() {
        var locked = false
        var fc = null
        for (var f = 0; locked == false && f < this._DADInventoryWindow[this.ohcrap[0]].DADitems[this.ohcrap[1]][this.ohcrap[2]].allcells.length; f++)
        {
          TargetType = this.item().scope
          TargetID = this._actorWindow.index()
          var ohb = this._DADInventoryWindow[this.ohcrap[0]].DADcells[this.ohcrap[1]][this._DADInventoryWindow[this.ohcrap[0]].DADitems[this.ohcrap[1]][this.ohcrap[2]].allcells[f]]
          fc = logicProcessor(ohb, ohb.ItemUsableInvLogic, this._DADInventoryWindow[this.ohcrap[0]].DADitems[this.ohcrap[1]][this.ohcrap[2]], this._actor._actorId, TargetType, TargetID)
          if (fc == false)
          {
            locked = true
          }
        }
        if (this.canUse() && locked == false) {
          for (var g = 0; g < this._DADInventoryWindow[this.ohcrap[0]].DADitems[this.ohcrap[1]][this.ohcrap[2]].allcells.length; g++)
          {
            var ohb = this._DADInventoryWindow[this.ohcrap[0]].DADcells[this.ohcrap[1]][this._DADInventoryWindow[this.ohcrap[0]].DADitems[this.ohcrap[1]][this.ohcrap[2]].allcells[g]]
            fc = logicProcessor(ohb, ohb.ItemOkInvLogic, this._DADInventoryWindow[this.ohcrap[0]].DADitems[this.ohcrap[1]][this.ohcrap[2]], this._actor._actorId)
          }
          this.useItem();
          this.hideSubWindow(this._actorWindow);
          var point = null
          for (var i=0; i < $gameParty._actors.length; i++)
          {
            if (this._actor._actorId == $gameParty._actors[i])
            {point = i; i = $gameParty._actors.length}
          }

          var positionsx = []
          var positionsy = []
          var makets = []
          var mpx = []
          var mpy = []
          for (var j=0; j<$gameParty.DADmodules[this._actor._actorId].length ;j++)
          {
            positionsx.push(toNumber($gameParty.DADmodules[this._actor._actorId][j].x))
            positionsy.push(toNumber($gameParty.DADmodules[this._actor._actorId][j].y))
            makets.push($gameParty.DADmodules[this._actor._actorId][j].maket)
            mpx.push(toNumber($gameParty.DADmodules[this._actor._actorId][j].maketShiftX))
            mpy.push(toNumber($gameParty.DADmodules[this._actor._actorId][j].maketShiftY))
          }

          this._DADInventoryWindow[point].DADitems = removeFromArray(this._DADInventoryWindow[point].DADitems, this.DADitempointed)
          $gameParty.DADitems[this._actor._actorId][this.DADmodulepointed] = removeFromArray($gameParty.DADitems[this._actor._actorId][this.DADmodulepointed], this.DADitempointed)
          this._DADInventoryWindow[point].refresh($gameParty.DADCells[this._actor._actorId], $gameParty.DADitems[this._actor._actorId], point, true, positionsx, positionsy, makets, mpx, mpy)
          this._DADItemInfo.refresh("clear")
        } 
        else 
        {
          SoundManager.playBuzzer();
        }
      };
      
      Scene_Item.prototype.onActorCancel = function() {
          this.hideSubWindow(this._actorWindow);
      };
      
      Scene_Item.prototype.hideSubWindow = function(window) {
          window.hide();
          window.deactivate();
          this._DADItemInfo.activate()
      };
      
      Scene_Item.prototype.syncupdate = async function () {
          syncupdateUni.call(this)
          this.runsyncupdate("Inventory")
      }
      
      Scene_Item.prototype.onItemOk = function(i,j,k) {
          this.ohcrap = [i,j,k]
          $gameParty.setLastItem(this.item());
          this.determineItem();
          this._DADItemInfo.deactivate()
      }
      
      Scene_Item.prototype.exitFromThisShit = function ()
      {
          this.KYS = true
          SceneManager.pop()
      }

      Scene_Item.prototype.nextAct = function ()
      {
        nextAct.call(this)
        this.Nact()
      }

      Scene_Item.prototype.previousAct = function ()
      {
        previousAct.call(this)
        this.Pact()
      }

      Scene_Item.prototype.createPartyDADInvWindows = function (x,y,w,h,locked)
      {
        createPartyDADInvWindows.call(this)
        this.yes(x,y,w,h,locked)
      }
      
      
      
      
      
      var _Scene_Battle_create = Scene_Battle.prototype.create;
      Scene_Battle.prototype.create = function(situation) {
          _Scene_Battle_create.call(this);
          this._DADItemInfo = new Window_DADInfo
          this.addWindow(this._DADItemInfo)
          this._DADItemInfo.hide()
          this.pointedactor = 0
          this._itemWindow.x = Graphics.boxWidth;
          if (DADPlugInfo.multibags == "true")
          {
            this._DADItemInfo.setHandler('pagedown', this.nextAct.bind(this));
            this._DADItemInfo.setHandler('pageup',   this.previousAct.bind(this));
          }

          this.createPartyDADInvWindows(0, this._DADItemInfo.height, Graphics.boxWidth, Graphics.boxHeight - this._DADItemInfo.height,true)
          this._DADInventoryWindow[0].hide()

          this._DADItemInfo.setHandler('cancel', this.exitFromThisShit.bind(this));
          this._DADItemInfo.deactivate()
          this._DADItemInfo.mode = "Battle"
          this._itemWindow.processOk = function() {}
          this.syncupdate()
          this._DADactionlist = []
          this._actorWindow.x = (Graphics.boxWidth - this._actorWindow.width) / 2
          this._windowLayer.removeChild(this._actorWindow)
          this.addWindow(this._actorWindow)
          this._actorWindow.refresh()
      };
      
      Scene_Battle.prototype.exitFromThisShit = function() {
            if (this._DADItemInfo.mode == "Victory")
            {
              var key = 1
              for (var i = 0; (i < $gameParty._actors.length && DADPlugInfo.multibags == "true") || (i<1); i++)
              {
                if (DADPlugInfo.multibags == "true")
                {key = $gameParty._actors[i]}
                $gameParty.DADitems[key] = []
                for (var j = 0; j < $gameParty.DADmodules[key].length; j++)
                {
                  $gameParty.DADitems[key].push([])
                }
              }
              $gameParty._items = {}
              $gameParty._weapons = {}
              $gameParty._armors = {}
              key = 1
              for (var j = 0; j < this._DADInventoryWindow.length-1; j++)
              {
                if (DADPlugInfo.multibags == "true")
                {key = $gameParty._actors[j]}
                for (var i = 0; i < this._DADInventoryWindow[j].DADitems.length;i++)
                {
                  for (var k = 0; k < this._DADInventoryWindow[j].DADitems[i].length; k++)
                  {
                    $gameParty.DADitems[key][i].push({itemtype: this._DADInventoryWindow[j].DADitems[i][k].itemtype, dataid: this._DADInventoryWindow[j].DADitems[i][k].dataid, maincell: this._DADInventoryWindow[j].DADitems[i][k].maincell, direction: this._DADInventoryWindow[j].DADitems[i][k].direction})
                    
                    switch ($gameParty.DADitems[key][i][k].itemtype)
                    {
                    case "item":
                        $gameParty.gainItemOld($dataItems[$gameParty.DADitems[key][i][k].dataid], 1)
                    break;
                    case "weapon":
                        $gameParty.gainItemOld($dataWeapons[$gameParty.DADitems[key][i][k].dataid], 1)
                    break;
                    case "armor":
                        $gameParty.gainItemOld($dataArmors[$gameParty.DADitems[key][i][k].dataid], 1)
                    break;
                    }
                  }
                }
              }
              currentloot = null
              this.KYS = true
              SceneManager.pop()
          }
          else
          {
            for (var i = 0; i < this._DADInventoryWindow.length; i++)
            {
              this._DADInventoryWindow[i].hide();
            }
            this._DADItemInfo.deactivate();
            this._DADItemInfo.hide();
            this._actorCommandWindow.active = true
          }
      };
      
      
      
      Scene_Battle.prototype.removeFromArray = function (arr, num)
      {
      newarr = []
      for (var i=0; i < arr.length;i++)
      {
          if (i != num)
          {
              newarr.push(arr[i])
          }
      }
          return newarr
      }
      
      Scene_Battle.prototype.syncupdate = async function () {
          syncupdateUni.call(this)
          this.runsyncupdate("Battle")
      }
      
      Scene_Battle.prototype.commandItem = function() {
        if (DADPlugInfo.multibags == "true")
        {
          this.pointedactor = this._statusWindow._index
        }
        this._itemWindow.activate();
        this._itemWindow.deselect();
        this._DADInventoryWindow[this.pointedactor].show()
        this._DADItemInfo.show()
        this._itemWindow.makeItemList()
      };
      
      Scene_Battle.prototype.onItemOk = function() {
          var item = this._itemWindow.item();
          $gameParty.setLastItem(item);
          if (item != null) {
            var action = BattleManager.inputtingAction();
            action.setItem(item.id);
            this.onSelectAction();
            this._itemWindow.deactivate();
            this._DADactionlist.push({action: action, pointedactor: this.pointedactor, DADmodulepointed: this.DADmodulepointed, DADitempointed: this.DADitempointed})
          }
          else {SoundManager.playBuzzer()}
      }
      
      Scene_Battle.prototype.onItemCancel = function() {
          this._itemWindow.hide();
          this._itemWindow.deactivate();
          this._actorCommandWindow.activate();
          this._DADInventoryWindow[this.pointedactor].hide()
          this._DADItemInfo.hide()
      };

      Scene_Battle.prototype.onActorCancel = function() {
        this._actorWindow.hide();
        switch (this._actorCommandWindow.currentSymbol()) {
        case 'skill':
            this._skillWindow.show();
            this._skillWindow.activate();
            break;
        case 'item':
            this._itemWindow.deactivate();
            this._itemWindow.hide();
            this._actorCommandWindow.activate();
            this._DADInventoryWindow[this.pointedactor].hide()
            this._DADItemInfo.hide()
            break;
        }
      };

      Scene_Battle.prototype.winnigshit = function() {
        for (var i = 0; i < this._DADInventoryWindow.length;i++)
        {this._windowLayer.removeChild(this._DADInventoryWindow[i])}
        this.pointedactor = 0
        this.createPartyDADInvWindows(0, this._DADItemInfo.height, Graphics.boxWidth/2, Graphics.boxHeight - this._DADItemInfo.height,false)
        this._DADInventoryWindow.push(new Window_Grid(Graphics.boxWidth/2, this._DADItemInfo.height, Graphics.boxWidth/2, Graphics.boxHeight - this._DADItemInfo.height, currentloot.cells, currentloot.items,this._DADInventoryWindow.length, false, [0], [0], [], [], []))
        this.addWindow(this._DADInventoryWindow[this._DADInventoryWindow.length-1])
        this._DADItemInfo.show()
        this._DADItemInfo.activate()
        this.runsyncupdate("Battle")
      }

      Scene_Battle.prototype.nextAct = function ()
      {
        nextAct.call(this)
        this.Nact()
      }

      Scene_Battle.prototype.previousAct = function ()
      {
        previousAct.call(this)
        this.Pact()
      }

      Scene_Battle.prototype.createPartyDADInvWindows = function (x,y,w,h,locked)
      {
        createPartyDADInvWindows.call(this)
        this.yes(x,y,w,h,locked)
      }



      
          var _Scene_Equip_create = Scene_Equip.prototype.create;
          Scene_Equip.prototype.create = function() {
          _Scene_Equip_create.call(this);
          this.removeStandartWindows();
          this.CreateMainWindow();
          };
      
          Scene_Equip.prototype.removeStandartWindows = function() {
            this._helpWindow.hide()
            this._slotWindow.width = this._statusWindow.width
            this._itemWindow.hide()
            this._itemWindow.deactivate()
            this._commandWindow.hide()
            this._commandWindow.deactivate()  
            this._slotWindow.activate()
            this._slotWindow.select(0)
            this._slotWindow.cursorPagedown = function(){}
            this._slotWindow.cursorPageup = function(){}
            this._slotWindow.setHandler('ok',   this.equipping.bind(this));
            this._slotWindow.setHandler('cancel',   this.exitFromThisShit.bind(this));
          };
      
          Scene_Equip.prototype.CreateMainWindow = function() {
            this._DADItemInfo = new Window_DADInfo()
            this.addWindow(this._DADItemInfo)
            this._DADItemInfo.setHandler('cancel',   this.stopEquipping.bind(this));
            if (DADPlugInfo.multibags == "true")
            {
              this._DADItemInfo.setHandler('pagedown', this.nextAct.bind(this));
              this._DADItemInfo.setHandler('pageup',   this.previousAct.bind(this));
            }
            this.createPartyDADInvWindows(this._slotWindow.width, this._DADItemInfo.height, Graphics.boxWidth - this._slotWindow.width, Graphics.boxHeight - this._DADItemInfo.height,true)
            this._DADInventoryWindow[0].hide()
            var winnow = getElementNumber($gameParty._actors, this._actor._actorId)
            this._DADInventoryWindow[winnow].show()
            this.pointedactor = winnow
            this._statusWindow.y = this._DADItemInfo.height
            this._slotWindow.height = Graphics.boxHeight - this._DADItemInfo.height - this._statusWindow.height
            this._slotWindow.y = this._statusWindow.y + this._statusWindow.height
            this._slotWindow.x = 0
            this._slotWindow.refresh()
            this._blankWindow = new Window_Base()
            this._blankWindow.x = this._slotWindow.x
            this._blankWindow.y = this._slotWindow.y
            this._blankWindow.height = this._slotWindow.height
            this._blankWindow.width = this._slotWindow.width
            this._blankWindow.DADitem = null
            this._blankWindow.hide()
            this.addWindow(this._blankWindow)
            this.syncupdate()
            this._DADItemInfo.activate()
          };
      
          Scene_Equip.prototype.equipping = function() {
              this._slotWindow.deactivate()
              this._DADItemInfo.activate()
              this._blankWindow.equiptype = this._slotWindow._actor.equipSlots()[this._slotWindow.index()]
              dataid = $gameActors._data[this._slotWindow._actor._actorId]._equips[this._slotWindow.index()]._itemId
              if (dataid != 0)
              {
                  if (this._blankWindow.equiptype == 1)
                  {
                      itemtype = "weapon"
                  }
                  else
                  {
                      itemtype = "armor"
                  }
                  this.maincell = null
                  direction = "up"
                  x = 0
                  y = 0
                  switch (itemtype)
                  {
                      case "weapon":
                          bitmap = "DADWeaponSprites"
                      break;
                      case "armor":
                          bitmap = "DADArmorSprites"
                      break;
                  }
                  container = "equipped"
                  winancorx = this._blankWindow.x
                  winancory = this._blankWindow.y
                  locked = false
                  
                  this._blankWindow.DADitem = new DADItem(itemtype, dataid, this.maincell, direction, x, y, bitmap, container, "equip", -winancorx, -winancory, locked)
                  this._blankWindow.DADitem.setFrame(this._blankWindow.DADitem.shiftx*DADPlugInfo.cellsize, this._blankWindow.DADitem.shifty*DADPlugInfo.cellsize, this._blankWindow.DADitem.cellwidth*DADPlugInfo.cellsize , this._blankWindow.DADitem.celllength*DADPlugInfo.cellsize);
                  this._blankWindow.DADitem.x = (this._blankWindow.width - (DADPlugInfo.cellsize * this._blankWindow.DADitem.cellwidth) ) / 2
                  this._blankWindow.DADitem.y = (this._blankWindow.height - (DADPlugInfo.cellsize * this._blankWindow.DADitem.celllength) ) / 2
                  this._blankWindow.DADitem.placex = this._blankWindow.DADitem.x
                  this._blankWindow.DADitem.placey = this._blankWindow.DADitem.y
                  this._blankWindow.addChild(this._blankWindow.DADitem)
              }
              this._blankWindow.show()
              for (var i=0; i< this._DADInventoryWindow.length; i++)
              {
                for (var j=0; j< this._DADInventoryWindow[i].DADitems.length; j++)
                {
                  for (var a=0; a< this._DADInventoryWindow[i].DADitems[j].length; a++)
                  this._DADInventoryWindow[i].DADitems[j][a].locked = false
                }
              }
          };
      
          Scene_Equip.prototype.stopEquipping = function() {
            this._DADItemInfo.activate()
              this._slotWindow.refresh()
              this._statusWindow.refresh()
              this._slotWindow.activate()
              this._blankWindow.hide()
              this._blankWindow.removeChild(this._blankWindow.DADitem)
              this._blankWindow.DADitem = null
              this._blankWindow.equiptype = null
              for (var i=0; i< this._DADInventoryWindow.length; i++)
                {
                  for (var j=0; j< this._DADInventoryWindow[i].DADitems.length; j++)
                  {
                    for (var a=0; a< this._DADInventoryWindow[i].DADitems[j].length; a++)
                    this._DADInventoryWindow[i].DADitems[j][a].locked = true
                  }
                }
          };
      
          Scene_Equip.prototype.syncupdate = function() {
              syncupdateUni.call(this)
              this.runsyncupdate("Equipping")
          };
      
          Scene_Equip.prototype.exitFromThisShit = function() {
            var key = 1
            for (var i = 0; (i < $gameParty._actors.length && DADPlugInfo.multibags == "true") || (i<1); i++)
            {
              if (DADPlugInfo.multibags == "true")
              {key = $gameParty._actors[i]}
              $gameParty.DADitems[key] = []
              for (var j = 0; j < $gameParty.DADmodules[key].length; j++)
              {
                $gameParty.DADitems[key].push([])
              }
            }

            key = 1
            for (var j = 0; j < this._DADInventoryWindow.length; j++)
            {
              if (DADPlugInfo.multibags == "true")
              {key = $gameParty._actors[j]}
              for (var i = 0; i < this._DADInventoryWindow[j].DADitems.length;i++)
              {
                for (var k = 0; k < this._DADInventoryWindow[j].DADitems[i].length; k++)
                {
                  $gameParty.DADitems[key][i].push({itemtype: this._DADInventoryWindow[j].DADitems[i][k].itemtype, dataid: this._DADInventoryWindow[j].DADitems[i][k].dataid, maincell: this._DADInventoryWindow[j].DADitems[i][k].maincell, direction: this._DADInventoryWindow[j].DADitems[i][k].direction})
                }
              }
            }

            this.KYS = true
            SceneManager.pop()
          }

          Scene_Equip.prototype.nextAct = function ()
          {
            nextAct.call(this)
            this.Nact()
          }

          Scene_Equip.prototype.previousAct = function ()
          {
            previousAct.call(this)
            this.Pact()
          }

          Scene_Equip.prototype.createPartyDADInvWindows = function (x,y,w,h,locked)
          {
            createPartyDADInvWindows.call(this)
            this.yes(x,y,w,h,locked)
          }
      
          
      
      
          function Scene_DADChooseItem() {
              this.initialize.apply(this, arguments);
              }
              
              Scene_DADChooseItem.prototype = Object.create(Scene_MenuBase.prototype);
              Scene_DADChooseItem.prototype.constructor = Scene_DADChooseItem;
              
              Scene_DADChooseItem.prototype.initialize = function() {
              Scene_MenuBase.prototype.initialize.call(this);
              };
              
              Scene_DADChooseItem.prototype.create = function() {
                  Scene_MenuBase.prototype.create.call(this);
                  this._DADItemInfo = new Window_DADInfo
                  this._DADItemInfo.setHandler('cancel',   this.exitFromThisShit.bind(this));
                  this.addWindow(this._DADItemInfo)
                  this._DADItemInfo.activate()
                  this.pointedactor = 0
                  if (DADPlugInfo.multibags == "true")
                  {
                    this._DADItemInfo.setHandler('pagedown', this.nextAct.bind(this));
                    this._DADItemInfo.setHandler('pageup',   this.previousAct.bind(this));
                  }
                  this.createPartyDADInvWindows(0, this._DADItemInfo.height, Graphics.boxWidth, Graphics.boxHeight - this._DADItemInfo.height, true)
                  this.syncupdate()
              };
      
              Scene_DADChooseItem.prototype.exitFromThisShit = function() {
                  this.KYS = true
                  $gameVariables.setValue(DADPlugInfo.itemchoose, 0)
                  $gameVariables.setValue(DADPlugInfo.weaponchoose, 0)
                  $gameVariables.setValue(DADPlugInfo.armorchoose, 0)
                  SceneManager.pop()
                  };
      
              Scene_DADChooseItem.prototype.syncupdate = function() {
                  syncupdateUni.call(this)
                  this.runsyncupdate("ItemChoose")
              };

              Scene_DADChooseItem.prototype.onItemOk = function(i,j,k) {
                this.KYS = true
                switch (this._DADInventoryWindow[i].DADitems[j][k].itemtype)
                {
                  case "item":
                    $gameVariables.setValue(DADPlugInfo.itemchoose, toNumber(this._DADInventoryWindow[i].DADitems[j][k].dataid))
                    $gameVariables.setValue(DADPlugInfo.weaponchoose, 0)
                    $gameVariables.setValue(DADPlugInfo.armorchoose, 0)
                  break;
                  case "weapon":
                    $gameVariables.setValue(DADPlugInfo.itemchoose, 0)
                    $gameVariables.setValue(DADPlugInfo.weaponchoose,  toNumber(this._DADInventoryWindow[i].DADitems[j][k].dataid))
                    $gameVariables.setValue(DADPlugInfo.armorchoose, 0)
                  break;
                  case "armor":
                    $gameVariables.setValue(DADPlugInfo.itemchoose, 0)
                    $gameVariables.setValue(DADPlugInfo.weaponchoose, 0)
                    $gameVariables.setValue(DADPlugInfo.armorchoose,  toNumber(this._DADInventoryWindow[i].DADitems[j][k].dataid))
                  break;
                }
                SceneManager.pop()
              };

              Scene_DADChooseItem.prototype.nextAct = function ()
              {
                nextAct.call(this)
                this.Nact()
              }

              Scene_DADChooseItem.prototype.previousAct = function ()
              {
                previousAct.call(this)
                this.Pact()
              }

              Scene_DADChooseItem.prototype.createPartyDADInvWindows = function (x,y,w,h,locked)
              {
                createPartyDADInvWindows.call(this)
                this.yes(x,y,w,h,locked)
              }
      
      
      
              
              var _Scene_Shop = Scene_Shop.prototype.create;
              Scene_Shop.prototype.create = function() {
                  _Scene_Shop.call(this);
              };
      
              Scene_Shop.prototype.onBuyOk = function() {
                this._statusWindow.hide()
                  this._item = this._buyWindow.item();

                  this._DADItemInfo = new Window_DADInfo
                  this.addWindow(this._DADItemInfo)
                  this.pointedactor = 0
                  if (DADPlugInfo.multibags == "true")
                  {
                    this._DADItemInfo.setHandler('pagedown', this.nextAct.bind(this));
                    this._DADItemInfo.setHandler('pageup',   this.previousAct.bind(this));
                  }

                  if (SceneManager._scene._item.etypeId == undefined)
                  {
                    itemtypesh = "item"
                    itemnote = $dataItems[SceneManager._scene._item.id].note
                  }
                  else if (SceneManager._scene._item.etypeId == 1)
                  {
                    itemtypesh = "weapon"
                    itemnote = $dataWeapons[SceneManager._scene._item.id].note
                  }
                  else
                  {
                    itemtypesh = "armor"
                    itemnote = $dataArmors[SceneManager._scene._item.id].note
                  }
                  celllength = itemnote.match(/<DADcelllength: (.*)>/i);
                  cellwidth = itemnote.match(/<DADcellwidth: (.*)>/i);
                  if (celllength != null)
                  {
                    celllength = toNumber(celllength[1])
                  }
                  else
                  {
                    celllength = 1
                  }
                  if (cellwidth != null)
                  {
                    cellwidth = toNumber(cellwidth[1])
                  }
                  else
                  {
                    cellwidth = 1
                  }
                  maincell = (celllength-1) * cellwidth
                  shopcells = GetSimplexGrid(celllength,cellwidth)
                  this.createPartyDADInvWindows(0, this._DADItemInfo.height, Graphics.boxWidth/2, Graphics.boxHeight - 100 - this._DADItemInfo.height, false)
                  this._DADInventoryWindow.push(new Window_Grid(Graphics.boxWidth/2, this._DADItemInfo.height, Graphics.boxWidth/2, Graphics.boxHeight - 100 - this._DADItemInfo.height, [shopcells], [[{itemtype: itemtypesh, dataid: SceneManager._scene._item.id, direction: "up", maincell: maincell}]],this._DADInventoryWindow.length, false, [0], [0], [], [], []))
                  this._DADItemInfo.setHandler('cancel', this.exitBuying.bind(this));
                  this._DADItemInfo.playOkSound = function(){return;}
                  this.addWindow(this._DADInventoryWindow[this._DADInventoryWindow.length-1])
                  for (var i = 0; i < this._DADInventoryWindow[this._DADInventoryWindow.length-1].DADcells[0].length; i++)
                  {
                    this._DADInventoryWindow[this._DADInventoryWindow.length-1].DADcells[0][i].inputlogic = "return false;"
                    this._DADInventoryWindow[this._DADInventoryWindow.length-1].DADcells[0][i].outputlogic = "return true;"
                  }
                  this._DADItemInfo.activate()
                  this._buttonWindow = new Window_Buying_Buttons()
                  this.addWindow(this._buttonWindow)
                  this._buttonWindow.show()
                  this.syncupdateBuy()
                  var bitmap = ImageManager.loadDG7DAD('DADShopButtons');
      
                  this._cancelButton = new Sprite_Button();
                  this._cancelButton.bitmap = bitmap;
                  this._cancelButton.setColdFrame(168, 0, 168, 84);
                  this._cancelButton.setHotFrame(168, 84, 168, 84);
                  this._cancelButton.visible = true;
                  this.addChild(this._cancelButton);
                  this._cancelButton.setClickHandler(this.exitBuying.bind(this));
                  this._cancelButton.x = 162;
                  this._cancelButton.y = 532;
      
                  this._buyButton = new Sprite_Button();
                  this._buyButton.bitmap = bitmap;
                  this._buyButton.setColdFrame(0, 0, 168, 84);
                  this._buyButton.setHotFrame(0, 84, 168, 84);
                  this._buyButton.visible = true;
                  this.addChild(this._buyButton);
                  this._buyButton.setClickHandler(this.DADconfirmBuying.bind(this));
                  this._buyButton.x = 492;
                  this._buyButton.y = 532;
              };
      
              Scene_Shop.prototype.exitBuying = function() {
                this._statusWindow.show()
                SoundManager.playCancel();
                this._buyWindow.activate();
                this._DADItemInfo.hide()
                this._buttonWindow.hide()
                this._DADItemInfo.deactivate()
                this._cancelButton.visible = false
                this._buyButton.visible = false

                for (var i = 0; i < this._DADInventoryWindow.length; i++)
                {
                  this._DADInventoryWindow[i].hide();
                  this._windowLayer.removeChild(this._DADInventoryWindow[i])
                }
    
                this._windowLayer.removeChild(this._DADItemInfo)
                this._windowLayer.removeChild(this._buttonWindow)
                this.removeChild(this._cancelButton)
                this.removeChild(this._buyButton)
    
                this.KYS = true
              };
      
              Scene_Shop.prototype.DADconfirmBuying = function() {
                  this.KYS = true
                  this._statusWindow.show()
                  if (this._DADInventoryWindow[this._DADInventoryWindow.length-1].DADitems[0].length == 0)
                  {
                      var key = 1
                      for (var i = 0; (i < $gameParty._actors.length && DADPlugInfo.multibags == "true") || (i<1); i++)
                      {
                        if (DADPlugInfo.multibags == "true")
                        {key = $gameParty._actors[i]}
                        $gameParty.DADitems[key] = []
                        for (var j = 0; j < $gameParty.DADmodules[key].length; j++)
                        {
                          $gameParty.DADitems[key].push([])
                        }
                      }
                      SoundManager.playShop()
                      $gameParty.loseGold(this.buyingPrice());
                      this._goldWindow.refresh()
                      this._buyWindow.setMoney(this.money())
                      this._buyWindow.refresh()
                      
                      $gameParty._items = {}
                      $gameParty._weapons = {}
                      $gameParty._armors = {}
                      var key = 1
                      for (var j = 0; j < this._DADInventoryWindow.length-1; j++)
                      {
                        if (DADPlugInfo.multibags == "true")
                        {key = $gameParty._actors[j]}
                        for (var i = 0; i < this._DADInventoryWindow[j].DADitems.length;i++)
                        {
                          for (var k = 0; k < this._DADInventoryWindow[j].DADitems[i].length; k++)
                          {
                            $gameParty.DADitems[key][i].push({itemtype: this._DADInventoryWindow[j].DADitems[i][k].itemtype, dataid: this._DADInventoryWindow[j].DADitems[i][k].dataid, maincell: this._DADInventoryWindow[j].DADitems[i][k].maincell, direction: this._DADInventoryWindow[j].DADitems[i][k].direction})
                            switch ($gameParty.DADitems[key][i][k].itemtype)
                            {
                            case "item":
                                $gameParty.gainItemOld($dataItems[$gameParty.DADitems[key][i][k].dataid], 1)
                            break;
                            case "weapon":
                                $gameParty.gainItemOld($dataWeapons[$gameParty.DADitems[key][i][k].dataid], 1)
                            break;
                            case "armor":
                                $gameParty.gainItemOld($dataArmors[$gameParty.DADitems[key][i][k].dataid], 1)
                            break;
                            }
                          }
                        }
                        for (var i = 0; i < this._DADInventoryWindow[j].DADcells.length;i++)
                        {
                          for (var k = 0; k < this._DADInventoryWindow[j].DADcells[i].length; k++)
                          {
                            $gameParty.DADCells[key][i][k].item = this._DADInventoryWindow[j].DADcells[i][k].item
                          }
                        }
                      }
                  }
                  else
                  {SoundManager.playCancel()}
                  this._buyWindow.activate();
                  this._DADItemInfo.hide()
                  for (var i = 0; i < this._DADInventoryWindow.length; i++)
                  {
                    this._DADInventoryWindow[i].hide();
                    this._windowLayer.removeChild(this._DADInventoryWindow[i])
                  }
                  this._buttonWindow.hide()
                  this._DADItemInfo.deactivate()
      
                  this._windowLayer.removeChild(this._DADItemInfo)
                  this._windowLayer.removeChild(this._buttonWindow)
                  this.removeChild(this._cancelButton)
                  this.removeChild(this._buyButton)

                  this._DADInventoryWindow = null
              };
      
              Scene_Shop.prototype.syncupdateBuy = function() {
                  syncupdateUni.call(this)
                  this.runsyncupdate("Shopping")
              };
      
              Scene_Shop.prototype.syncupdateSell = function() {
                  syncupdateUni.call(this)
                  this.runsyncupdate("Selling")
              };
      
              Scene_Shop.prototype.commandSell = function() {
                  this.pointedactor = 0
                  this._DADItemInfo = new Window_DADInfo()
                  if (DADPlugInfo.multibags == "true")
                  {
                    this._DADItemInfo.setHandler('pagedown', this.nextAct.bind(this));
                    this._DADItemInfo.setHandler('pageup',   this.previousAct.bind(this));
                  }
                  this._DADItemInfo.playOkSound = function(){return;}

                  this._DADInventoryWindow = []
                  var key = 1
                  for (var i=0; (i<$gameParty._actors.length && DADPlugInfo.multibags == "true") || i<1; i++)
                  {
                    if (DADPlugInfo.multibags == "true")
                    {key = $gameParty._actors[i]}
                    positionsx = []
                    positionsy = []
                    makets = []
                    mpx = []
                    mpy = []
                    for (var j=0; j<$gameParty.DADmodules[$gameParty._actors[i]].length;j++)
                    {
                      positionsx.push(toNumber($gameParty.DADmodules[key][j].x))
                      positionsy.push(toNumber($gameParty.DADmodules[key][j].y))
                      makets.push($gameParty.DADmodules[key][j].maket)
                      mpx.push(toNumber($gameParty.DADmodules[key][j].maketShiftX))
                      mpy.push(toNumber($gameParty.DADmodules[key][j].maketShiftY))
                    }
                    this._DADInventoryWindow.push(new Window_Grid(0, this._DADItemInfo.height, Graphics.boxWidth/2, Graphics.boxHeight - 100 - this._DADItemInfo.height, $gameParty.DADCells[key], $gameParty.DADitems[key],this._DADInventoryWindow.length, true, positionsx, positionsy, makets, mpx, mpy))
                    this.addWindow(this._DADInventoryWindow[i]);
                    this._DADInventoryWindow[i].hide()
                  }
                  this._DADInventoryWindow[0].show()
                  

                  this._DADSellList = new Window_Selling_List(Graphics.boxWidth/2, this._DADItemInfo.height, Graphics.boxWidth/2, Graphics.boxHeight - this._DADItemInfo.height)
                  this._buttonWindow = new Window_Buying_Buttons()
                  this._buttonWindow.width = Graphics.boxWidth/2
                  this.addWindow(this._DADItemInfo)
                  this.addWindow(this._DADSellList)
                  this.addWindow(this._buttonWindow)
                  this._DADItemInfo.setHandler('cancel',   this.exitSelling.bind(this));
                  this._DADItemInfo.setHandler('ok',   this.DADconfirmSelling.bind(this));
                  this._commandWindow.deactivate();
                  this._DADItemInfo.show()
                  this._DADItemInfo.activate()
                  this.syncupdateSell()
      
                  var bitmap = ImageManager.loadDG7DAD('DADShopButtons');
      
                  this._cancelButton = new Sprite_Button();
                  this._cancelButton.bitmap = bitmap;
                  this._cancelButton.setColdFrame(168, 0, 168, 84);
                  this._cancelButton.setHotFrame(168, 84, 168, 84);
                  this._cancelButton.visible = true;
                  this.addChild(this._cancelButton);
                  this._cancelButton.setClickHandler(this.exitSelling.bind(this));
                  this._cancelButton.x = 32;
                  this._cancelButton.y = 532;
      
                  this._buyButton = new Sprite_Button();
                  this._buyButton.bitmap = bitmap;
                  this._buyButton.setColdFrame(0, 0, 168, 84);
                  this._buyButton.setHotFrame(0, 84, 168, 84);
                  this._buyButton.visible = true;
                  this.addChild(this._buyButton);
                  this._buyButton.setClickHandler(this.DADconfirmSelling.bind(this));
                  this._buyButton.x = 214;
                  this._buyButton.y = 532;
              };
      
              Scene_Shop.prototype.exitSelling = function() {
                  SoundManager.playCancel()
                  this._commandWindow.activate();
                  this._DADItemInfo.hide()
                  for (var i = 0; i < this._DADInventoryWindow.length; i++)
                  {
                    this._DADInventoryWindow[i].hide()
                    this._windowLayer.removeChild(this._DADInventoryWindow[i])
                  }
                  this._DADSellList.hide()
                  this._buttonWindow.hide()
                  this._DADItemInfo.deactivate()
                  this._cancelButton.visible = false
                  this._buyButton.visible = false
      
                  this._windowLayer.removeChild(this._DADItemInfo)
                  this._windowLayer.removeChild(this._DADSellList)
                  this._windowLayer.removeChild(this._buttonWindow)
                  this.removeChild(this._cancelButton)
                  this.removeChild(this._buyButton)
      
                  this.KYS = true
              };
      
              Scene_Shop.prototype.DADconfirmSelling = function() {
                  if (this._DADSellList.positions.length != 0)
                  {
                      SoundManager.playShop()
                      $gameParty.gainGold(this._DADSellList.itogprice);
                      for (var j=0; j < this._DADSellList.positions.length-1; j++)
                      {
                        for (var i=0; i < this._DADSellList.positions.length-1; i++)
                        {
                          ich = this._DADSellList.positions[i][0] * 100 + this._DADSellList.positions[i][1] * 10 + this._DADSellList.positions[i][2]
                          ipch = this._DADSellList.positions[i+1][0] * 100 + this._DADSellList.positions[i+1][1] * 10 + this._DADSellList.positions[i+1][2]
                          if (ich < ipch)
                          {
                            var temp = this._DADSellList.positions[i]
                            this._DADSellList.positions[i] = this._DADSellList.positions[i+1]
                            this._DADSellList.positions[i+1] = temp
                          }
                        }
                      }

                      for(var i=0; i < this._DADSellList.positions.length; i++)
                      {
                        var h = this._DADSellList.positions[i][0]
                        var j = this._DADSellList.positions[i][1]
                        var k = this._DADSellList.positions[i][2]
                        $gameParty.DADitems[$gameParty._actors[h]][j] = removeFromArray($gameParty.DADitems[$gameParty._actors[h]][j], k)
                        switch (this._DADInventoryWindow[h].DADitems[j][k].itemtype)
                        {
                          case "item":
                              item = $dataItems[this._DADInventoryWindow[h].DADitems[j][k].dataid]
                          break;
                          case "weapon":
                              item = $dataWeapons[this._DADInventoryWindow[h].DADitems[j][k].dataid]
                          break;
                          case "armor":
                              item = $dataArmors[this._DADInventoryWindow[h].DADitems[j][k].dataid]
                          break;
                        }
                        $gameParty.loseItemOld(item, 1)
                          
                      }
                      this._goldWindow.refresh()
                      this._buyWindow.setMoney(this.money())
                      this._buyWindow.refresh()
                  }
                  else
                  {SoundManager.playCancel()}

                  this._commandWindow.activate();
                  this._DADItemInfo.hide()
                  for (var i = 0; i < this._DADInventoryWindow.length; i++)
                  {
                    this._DADInventoryWindow[i].hide()
                    this._windowLayer.removeChild(this._DADInventoryWindow[i])
                  }
                  this._DADSellList.hide()
                  this._buttonWindow.hide()
                  this._DADItemInfo.deactivate()
                  this._cancelButton.visible = false
                  this._buyButton.visible = false
      
                  this._windowLayer.removeChild(this._DADItemInfo)
                  this._windowLayer.removeChild(this._DADSellList)
                  this._windowLayer.removeChild(this._buttonWindow)
                  this.removeChild(this._cancelButton)
                  this.removeChild(this._buyButton)
      
                  this.KYS = true
              };
      
              Scene_Shop.prototype.compareNumbers = function(a,b) {
                  return b - a
              };

              Scene_Shop.prototype.nextAct = function ()
              {
                this._DADInventoryWindow[this.pointedactor].hide()
                this.pointedactor = this.pointedactor + 1
                if (this.pointedactor == $gameParty._actors.length)
                {
                  this.pointedactor = 0
                }
                this._DADItemInfo.refresh("clear")
                this._DADInventoryWindow[this.pointedactor].show()
                this._DADItemInfo.activate()
              }

              Scene_Shop.prototype.previousAct = function ()
              {
                this._DADInventoryWindow[this.pointedactor].hide()
                this.pointedactor = this.pointedactor - 1
                if (this.pointedactor == -1)
                {
                  this.pointedactor = $gameParty._actors.length - 1
                }
                this._DADItemInfo.refresh("clear")
                this._DADInventoryWindow[this.pointedactor].show()
                this._DADItemInfo.activate()
              }

              Scene_Shop.prototype.createPartyDADInvWindows = function (x,y,w,h,locked)
              {
                createPartyDADInvWindows.call(this)
                this.yes(x,y,w,h,locked)
              }

              Scene_Shop.prototype.onItemOk = function (i,j,k)
              {
                if (this._DADInventoryWindow[i].DADitems[j][k].itemtype != "item" || $dataItems[this._DADInventoryWindow[i].DADitems[j][k].dataid].itypeId == 1)
                {
                  this.isstillpressed = true 
                  var flag = null
                  for (var l =0; l < this._DADSellList.positions.length; l++)
                  {
                    if (i == this._DADSellList.positions[l][0] && j == this._DADSellList.positions[l][1] && k == this._DADSellList.positions[l][2])
                    {
                      flag = l
                      l = this._DADSellList.positions.length
                    }
                  }
                  if (flag != null)
                  {
                    this._DADSellList.positions = removeFromArray(this._DADSellList.positions, flag)
                    this._DADSellList.posname = removeFromArray(this._DADSellList.posname, flag)
                    this._DADSellList.posprice = removeFromArray(this._DADSellList.posprice, flag)
                    this._DADSellList.refresh()
                  }
                  else
                  {
                    switch (this._DADInventoryWindow[i].DADitems[j][k].itemtype)
                    {
                      case "item":
                        itemname = $dataItems[this._DADInventoryWindow[i].DADitems[j][k].dataid].name
                        itemprice = $dataItems[this._DADInventoryWindow[i].DADitems[j][k].dataid].price / 2
                      break;
                      case "weapon":
                        itemname = $dataWeapons[this._DADInventoryWindow[i].DADitems[j][k].dataid].name
                        itemprice = $dataWeapons[this._DADInventoryWindow[i].DADitems[j][k].dataid].price / 2
                      break;
                      case "armor":
                        itemname = $dataArmors[this._DADInventoryWindow[i].DADitems[j][k].dataid].name
                        itemprice = $dataArmors[this._DADInventoryWindow[i].DADitems[j][k].dataid].price / 2
                      break;
                    }
                    this._DADSellList.positions.push([i,j,k])
                    this._DADSellList.posname.push(itemname)
                    this._DADSellList.posprice.push(Math.floor(itemprice))
                    this._DADSellList.refresh()
                    }
                  }
                  else{SoundManager.playBuzzer()}
              }


              
              function Window_DADChestBag() {
                this.initialize.apply(this, arguments);
              }
              
              Window_DADChestBag.prototype = Object.create(Window_Base.prototype);
              Window_DADChestBag.prototype.constructor = Window_DADChestBag;
              
              Window_DADChestBag.prototype.initialize = function(x,y,w,h,cells) {
                Window_Base.prototype.initialize.call(this, x,y,w,h);
                this.createContainerCells(cells, char)
                //this.FillContainer(situation)
              }
              
              Window_DADChestBag.prototype.createContainerCells = function (cells, char) {
                createContainerCellsUni.call(this)
                newcells = $gameParty.DADCells[char]
                this.create(cells)
              }
              Window_DADChestBag.prototype.FillContainer = function (situation) {
                FillContainerUni.call(this)
                container = $gameParty.DADitems[char] 
                locked = true
                this.fill(container, locked)
              }
              
              function Window_Grid() {
                this.initialize.apply(this, arguments);
              }
              
              Window_Grid.prototype = Object.create(Window_Base.prototype);
              Window_Grid.prototype.constructor = Window_Grid;
              
              Window_Grid.prototype.initialize = function(x,y,w,h,cells,container, dadmodule, locked, char, positionsx, positionsy, makets, mpx, mpy) {
                Window_Base.prototype.initialize.call(this, x, y, w, h);
                this.DADcellsSave = cells
                this.DADitemsSave = container
                this.CreateBag(cells, char, positionsx, positionsy, makets, mpx, mpy);
                this.FillBag(container, dadmodule, locked);
              }
              
              Window_Grid.prototype.refresh = function(cells,container, dadmodule, locked, char, positionsx, positionsy, makets, mpx, mpy) {
                this.contents.clear();
                for (var i = 0; i < this.DADcells.length; i++)
                {
                  for (var j = 0; j < this.DADcells[i].length; j++)
                  {
                    this.removeChild(this.DADcells[i][j])
                  }
                  this.removeChild(this.makets[i])
                }
                
                for (var i = 0; i < this.DADitems.length; i++)
                {
                  for (var j = 0; j < this.DADitems[i].length; j++)
                  {
                    this.removeChild(this.DADitems[i][j])
                  }
                }
                SceneManager._scene._DADItemInfo.refresh("clear")
                this.CreateBag(cells, char, positionsx, positionsy, makets, mpx, mpy);
                this.FillBag(container, dadmodule, locked);
              }
          
              Window_Grid.prototype.CreateBag = function(cells, char, positionsx, positionsy, makets, mpx, mpy) {
                createContainerCellsUni.call(this)
                this.create(cells, char, positionsx, positionsy, makets, mpx, mpy)
              }
          
              Window_Grid.prototype.FillBag = function(container, con, locked) {
                FillContainerUni.call(this)
                this.fill(container, con, locked)
                }
            
              Window_DADInfo = function () {
                this.initialize.apply(this, arguments);
              }
              
              Window_DADInfo.prototype = Object.create(Window_Selectable.prototype);
              Window_DADInfo.prototype.constructor = Window_DADInfo;
              
              Window_DADInfo.prototype.initialize = function() {
                Window_Selectable.prototype.initialize.call(this, 0, 0, Graphics.boxWidth, this.fittingHeight(3));
                  this.refresh()
                  this.activate()
              }
          
              Window_DADInfo.prototype.refresh = function(itemtype, dataid)
              {
                this.contents.clear();
                this.createContents();
                if (dataid != null || dataid != undefined)
                {
                  switch (itemtype)
                  {
                    case "item":
                      this.drawTextEx($dataItems[dataid].name, 0, 0)
                      this.drawTextEx($dataItems[dataid].description, 0, 40)
                    break;
                    case "weapon":
                      this.drawTextEx($dataWeapons[dataid].name, 0, 0)
                      this.drawTextEx($dataWeapons[dataid].description, 0, 40)
                    break;
                    case "armor":
                      this.drawTextEx($dataArmors[dataid].name, 0, 0)
                      this.drawTextEx($dataArmors[dataid].description, 0, 40)
                    break;
                    case "clear":
                    break;
                  }
                  
                }
              }
        
        
              Window_EquipSlot.prototype.drawItem = function(index) {
                if (this._actor) {
                    var iconBoxWidth = Window_Base._iconWidth + 4;
                    var rect = this.itemRectForText(index);
                    this.changeTextColor(this.systemColor());
                    this.changePaintOpacity(this.isEnabled(index));
                    this.drawIcon(toNumber(DADPlugInfo.eicons[SceneManager._scene._slotWindow._actor.equipSlots()[index]-1]), rect.x, rect.y + 2);
                    if (this._actor.equips()[index]) {
                      this.resetTextColor();
                      this.drawText(this._actor.equips()[index].name, rect.x + iconBoxWidth, rect.y, rect.width - 32);
                    }
                    else
                    {
                      emptytext = "\\C[7]" + DADPlugInfo.emptytext
                      this.drawTextEx(emptytext, rect.x + iconBoxWidth, rect.y, rect.width - 32);
                    }
        
                    this.changePaintOpacity(true);
                }
              };

        
            Window_EquipSlot.prototype.drawItemName = function(item, x, y, width) {
              width = width || Graphics.boxHeight/2;
              if (item) {
                  
                  this.resetTextColor();
                  this.drawIcon(item.iconIndex, x + 2, y + 2);
                  this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
              }
            };
        
        
            function Window_Buying_Buttons() {
              this.initialize.apply(this, arguments);
            }
            
            Window_Buying_Buttons.prototype = Object.create(Window_Base.prototype);
            Window_Buying_Buttons.prototype.constructor = Window_Buying_Buttons;
            
            Window_Buying_Buttons.prototype.initialize = function() {
              Window_Base.prototype.initialize.call(this, 0, Graphics.boxHeight - 100, Graphics.boxWidth, 100);
              
            }
        
            function Window_Selling_List() {
              this.initialize.apply(this, arguments);
            }
            
            Window_Selling_List.prototype = Object.create(Window_Base.prototype);
            Window_Selling_List.prototype.constructor = Window_Selling_List;
            
            Window_Selling_List.prototype.initialize = function(x,y,w,h) {
              Window_Base.prototype.initialize.call(this, x,y,w,h);
              this.positions = []
              this.posname = []
              this.posprice = []
              this.drawText(DADPlugInfo.total, 0, 375, 200, 'left');
              this.drawText("0 " + $dataSystem.currencyUnit, 0, 375, 350, 'right');
            }
        
            Window_Selling_List.prototype.refresh = function() {
                this.contents.clear();
                this.itogprice = 0
                for (var i = 0; i < this.positions.length; i++)
                {
                  pricetext = this.posprice[i] + " " + $dataSystem.currencyUnit
                  this.drawText(this.posname[i], 0, i*32, 200, 'left');
                  this.drawText(pricetext, 0, i*32, 350, 'right');
                  this.itogprice = this.itogprice + this.posprice[i]
                }
                if (this.itogprice == NaN || this.itogprice == undefined)
                {
                  this.itogprice = 0
                }
                this.drawText(DADPlugInfo.total, 0, 375, 200, 'left');
        
                this.drawText(this.itogprice + " " + $dataSystem.currencyUnit, 0, 375, 350, 'right');
            }
})();