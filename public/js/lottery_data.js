var lottery_initial_datas =[
    	{
        "nameen": "avatar1",
        "namezh": "地三鲜盖饭"
       	},
        {
        "nameen": "avatar2",
        "namezh": "猛男炒饭"
        }
        ,
        {
        "nameen": "avatar3",
        "namezh": "麻辣烫"
        },
        {
        "nameen": "avatar4",
        "namezh": "烤串烤饼"
        }
        ,
        {
        "nameen": "avatar5",
        "namezh": "烤冷面"
        }
        ,
        {
        "nameen": "avatar6",
        "namezh": "寿司"
        }
        ,
        {
        "nameen": "avatar7",
        "namezh": "鱼香肉丝盖饭"
        },
        {
        "nameen": "avatar8",
        "namezh": "红烧肉盖饭"
        },
        {
        "nameen": "avatar9",
        "namezh": "爆炒卷心菜"
        },   
        {
        "nameen": "avatar10",
        "namezh": "干锅土豆"
        },
        {
        "nameen": "avatar11",
        "namezh": "干锅花菜"
        },
        {
        "nameen": "avatar12",
        "namezh": "水煮肉片"
        }
        ,
        {
        "nameen": "avatar13",
        "namezh": "饿一顿"
        }
        ,
        {
        "nameen": "avatar14",
        "namezh": "水果餐"
        },
        {
        "nameen": "avatar15",
        "namezh": "爆炒肝尖"
        }
        ,
        {
        "nameen": "avatar16",
        "namezh": "水煮鱼"
        }
        ,
        {
        "nameen": "avatar17",
        "namezh": "醉排骨"
        },
        {
        "nameen": "avatar18",
        "namezh": "麻辣小龙虾"
        },
        {
        "nameen": "avatar19",
        "namezh": "黄焖鸡"
        },
        {
        "nameen": "avatar20",
        "namezh": "米线"
        }
        ,
        {
        "nameen": "avatar21",
        "namezh": "凉皮"
        },
        {
        "nameen": "avatar22",
        "namezh": "酸辣粉"
        }
        ,
        {
        "nameen": "avatar23",
        "namezh": "驴肉火烧"
        },
        {
        "nameen": "avatar24",
        "namezh": "再来一次"
        }
        ,
        {
        "nameen": "avatar25",
        "namezh": "焖饭"
        }
        ,
        {
        "nameen": "avatar26",
        "namezh": "干煸豆角"
        },
        {
        "nameen": "avatar27",
        "namezh": "大葱炒鸡蛋"
        }
        ,
        {
        "nameen": "avatar28",
        "namezh": "麻婆豆腐"
        }
        ,
        {
        "nameen": "avatar29",
        "namezh": "泡面"
        },
        {
        "nameen": "avatar30",
        "namezh": "干锅土豆"
        }
        ,
        {
        "nameen": "avatar31",
        "namezh": "青椒炒鸡蛋"
        }
        ,
        {
        "nameen": "avatar32",
        "namezh": "西红柿鸡蛋"
        },
        {
        "nameen": "avatar33",
        "namezh": "麻辣香锅"
        },
        {
        "nameen": "avatar34",
        "namezh": "宫保鸡丁"
       },
        {
        "nameen": "avatar35",
        "namezh": "糖醋里脊"
        },
        {
        "nameen": "avatar36",
        "namezh": "炸鸡汉堡"
        },
        {
        "nameen": "avatar37",
        "namezh": "快餐"
        }
        ,
        {
        "nameen": "avatar38", 
        "namezh": "便当"
        }
        ,
        {
        "nameen": "avatar39",
        "namezh": "卤肉饭"
        },
        {
        "nameen": "avatar40",
        "namezh": "烤肉拌饭"
        }
        ,
        {
        "nameen": "avatar41",
        "namezh": "沙县小吃"
        }
        ,
        {
        "nameen": "avatar42",
        "namezh": "排骨米饭"
        },
        {
        "nameen": "avatar43",
        "namezh": "牛肉炒饭"
        },   
        {
        "nameen": "avatar44",
        "namezh": "青椒炒豆皮"
        },
        {
        "nameen": "avatar45",
        "namezh": "老厨豆腐"
        },
        {
        "nameen": "avatar46",
        "namezh": "酸辣土豆丝"
        }
];

var award_config = {
    "award01": 1,
    "award02": 3,
    "award03": 6,
    "award04": 100//抽奖次数
};

// 初始化数据
//初始化抽奖号
if (!localStorage.getItem('lottery_initial')) {
    var data_str = JSON.stringify(lottery_initial_datas);
    localStorage.setItem('lottery_initial', data_str);
}
//初始化抽奖次数
if (!localStorage.getItem('award_initial')) {
    var award_str = JSON.stringify(award_config);
    localStorage.setItem('award_initial', award_str);
}