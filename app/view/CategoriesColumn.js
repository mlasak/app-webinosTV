// Categories
Ext.define('webinosTV.view.CategoriesColumn', {
  extend: 'Ext.Container',
  xtype: 'categscol',
  config: {
//     height: '100%',
//     //    width:'90%',
//     flex: 1.5,
    layout: {
      type: 'vbox',
      align: 'center',
      pack: 'center'
    },
    items: [{//Headers  #1
        xtype: 'container',
        width: '100%',
        cls: 'title-container',
        layout: {
          type: 'hbox',
          align: 'center',
          pack: 'center'
        },
        items: [{
            xtype: 'panel',
            html: 'Categories',
            padding: 2,
            margin: 2 /*,flex:1.5*/
          } //#1
        ]
      }, {//Container #1 - Media Category
        xtype: 'tileslist',
        id: 'mediaCategoryList',
        disabled: true,
        masked: true,
        defaultType: 'mediacategorylistitem', //for media
        cls: 'phone-listview-indicator', //additional css class to highlight scrollbar
        width: '100%',
        //      flex: 1.5,
        store: {
          storeId: 'categoriesstore-id',
          fields: ['id', 'category', 'mediaCategoryName'],
          data: [
            {
              id: 1,
              category: 'audio',
              mediaCategoryName: 'Mp3 collection'
            },
            {
              id: 2,
              category: 'tvchannel',
              mediaCategoryName: 'DVB-T'
            },
            {
              id: 3,
              category: 'video',
              mediaCategoryName: 'Videos'
            },
            {
              id: 4,
              category: 'image',
              mediaCategoryName: 'Pictures'
            },
            {
              id: 5,
              category: 'app',
              mediaCategoryName: 'webinos app store'
            },
            {
              id: 6,
              category: 'doc',
              mediaCategoryName: 'Documents'
            }]
        }
      }]
  }
});