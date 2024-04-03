# graphql-api

## Start
```
npm i

npm run start

# then access http://localhost:3000/graphql to test the graphQL 

```

## Example
```
~ ❯ curl --request POST \                                                                            
    --header 'content-type: application/json' \
    --url http://localhost:3000/graphql \
    --data '{"query":"query($name: String) {\n  mansionList(name: $name) {\n    names\n    mansions {\n      category\n      name\n      address\n      station\n      description\n      image\n      url\n      price\n      size\n      age\n      updateDate\n    }\n  }\n}","variables":{"name":"旗の台スカイ"}}' | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  7085  100  6782  100   303  31544   1409 --:--:-- --:--:-- --:--:-- 32800
{
  "data": {
    "mansionList": {
      "names": [
        "旗の台スカイマンション",
        "コスモ旗の台",
        "シャンボール旗の台",
        "ハイツ旗の台",
        "ピアース旗の台",
        "フェアロージュ旗の台",
        "ブリリア旗の台",
        "旗の台ガーデンタワー"
      ],
      "mansions": [
        {
          "category": "中古マンション",
          "name": "旗の台スカイマンション",
          "address": "東京都品川区旗の台２",
          "station": "東急池上線/旗の台 －徒歩4分",
          "description": "複数路線ご利用可能！フルリノベーション物件！",
          "image": "https://img01.suumo.com/front/gazo/bukken/030/N010000/img/599/72943599/72943599_0024.jpg",
          "url": "https://suumo.jp/ms/chuko/tokyo/sc_shinagawa/nc_72943599/",
          "price": "購入価格： 5180万円 月々支払額： 12.36万円",
          "size": "専有面積： 52.36m2（壁芯） 間取り： 2DK",
          "age": "1983年11月",
          "updateDate": "2024-03-29T02:40:06Z"
        },
        {
          "category": "中古マンション",
          "name": "コスモ旗の台",
          "address": "東京都品川区荏原７",
          "station": "東急目黒線/西小山 －徒歩10分",
          "description": "■コスモ旗の台■2駅3路線利用可能な西向きの3LDK・東急目黒線「西小山」駅から徒歩10分・東急…",
          "image": "https://img01.suumo.com/front/gazo/bukken/030/N010000/img/713/74463713/74463713_0021.jpg",
          "url": "https://suumo.jp/ms/chuko/tokyo/sc_shinagawa/nc_74463713/",
          "price": "購入価格： 6900万円 月々支払額： 16.47万円",
          "size": "専有面積： 65.64m2（壁芯） 間取り： 3LDK",
          "age": "1986年1月",
          "updateDate": "2024-03-29T02:40:06Z"
        },
        {
          "category": "中古マンション",
          "name": "シャンボール旗の台",
          "address": "東京都品川区旗の台２",
          "station": "東急大井町線/旗の台 －徒歩3分",
          "description": "◆東急池上線・大井町線「旗の台」駅徒歩3分の好立地◆最上階　南向きバルコニー　ハウスク リーニ…",
          "image": "https://img01.suumo.com/front/gazo/bukken/030/N010000/img/774/74064774/74064774_0002.jpg",
          "url": "https://suumo.jp/ms/chuko/tokyo/sc_shinagawa/nc_74064774/",
          "price": "購入価格： 1470万円 月々支払額： 3.51万円",
          "size": "専有面積： 28m2（壁芯） 間取り： 1DK",
          "age": "1970年1月",
          "updateDate": "2024-03-29T02:40:01Z"
        },
        {
          "category": "中古マンション",
          "name": "ハイツ旗の台",
          "address": "東京都品川区旗の台２",
          "station": "東急大井町線/旗の台 －徒歩4分",
          "description": "東急大井町線・東急池上線「旗の台」駅まで徒歩4分！！3駅3路線利用可能とアクセス良好",
          "image": "https://img01.suumo.com/front/gazo/bukken/030/N010000/img/410/72654410/72654410_0001.jpg",
          "url": "https://suumo.jp/ms/chuko/tokyo/sc_shinagawa/nc_72654410/",
          "price": "購入価格： 1790万円 月々支払額： 4.27万円",
          "size": "専有面積： 32.16m2（壁芯） 間取り： 1DK",
          "age": "1968年11月",
          "updateDate": "2024-03-29T02:40:01Z"
        },
        {
          "category": "中古マンション",
          "name": "旗の台スカイマンション",
          "address": "東京都品川区旗の台２-11-4",
          "station": "東急大井町線/旗の台 －徒歩4分",
          "description": "【即日案内!】頭金0円から購入可!◇新耐震 南東向き R1適合住宅!◇フラット35 駅徒歩4分の好立地!<…",
          "image": "https://img01.suumo.com/front/gazo/bukken/030/N010000/img/302/73581302/73581302_0040.jpg",
          "url": "https://suumo.jp/ms/chuko/tokyo/sc_shinagawa/nc_73581302/",
          "price": "購入価格： 5380万円 月々支払額： 12.84万円",
          "size": "専有面積： 52.36m2（15.83坪） 間取り： 2LDK",
          "age": "1983年11月",
          "updateDate": "2024-03-29T02:40:01Z"
        },
        {
          "category": "中古マンション",
          "name": "ピアース旗の台",
          "address": "東京都品川区旗の台２",
          "station": "東急大井町線/旗の台 －徒歩3分",
          "description": "2020年3月築　東急線「旗の台」駅徒歩3分の南向き角住戸！",
          "image": "https://img01.suumo.com/front/gazo/bukken/030/N010000/img/150/74472150/74472150_0001.jpg",
          "url": "https://suumo.jp/ms/chuko/tokyo/sc_shinagawa/nc_74472150/",
          "price": "購入価格： 5980万円 月々支払額： 14.27万円",
          "size": "専有面積： 35.4m2（10.70坪）（壁芯） 間取り： 1LDK",
          "age": "2020年3月",
          "updateDate": "2024-03-29T02:40:01Z"
        },
        {
          "category": "中古マンション",
          "name": "フェアロージュ旗の台",
          "address": "東京都品川区旗の台５",
          "station": "東急大井町線/旗の台 －徒歩4分",
          "description": "◆東急池上線・大井町線「旗の台」駅　徒歩４分の立地◆南西・南東角住戸につき日当たり・通風良…",
          "image": "https://img01.suumo.com/front/gazo/bukken/030/N010000/img/369/73462369/73462369_0017.jpg",
          "url": "https://suumo.jp/ms/chuko/tokyo/sc_shinagawa/nc_73462369/",
          "price": "購入価格： 7650万円 月々支払額： 18.26万円",
          "size": "専有面積： 84.34m2（25.51坪）（壁芯） 間取り： 2LDK+S（納戸）",
          "age": "1996年3月",
          "updateDate": "2024-03-29T02:40:01Z"
        },
        {
          "category": "中古マンション",
          "name": "旗の台スカイマンション",
          "address": "東京都品川区旗の台２",
          "station": "東急大井町線/旗の台 －徒歩4分",
          "description": "◇新規リフォーム済み◇新耐震基準◇住宅ローン控除使用可◇南東角部屋、日当眺望良…",
          "image": "https://img01.suumo.com/front/gazo/bukken/030/N010000/img/671/73641671/73641671_0003.jpg",
          "url": "https://suumo.jp/ms/chuko/tokyo/sc_shinagawa/nc_73641671/",
          "price": "購入価格： 7800万円 月々支払額： 18.61万円",
          "size": "専有面積： 78.57m2（壁芯） 間取り： 3LDK",
          "age": "1983年11月",
          "updateDate": "2024-03-29T02:40:01Z"
        },
        {
          "category": "中古マンション",
          "name": "ブリリア旗の台",
          "address": "東京都品川区旗の台６",
          "station": "東急大井町線/旗の台 －徒歩8分",
          "description": "◇武蔵野台地の南端の高台、都心に寄り添う静謐な邸宅地「旗の台」に住まう◇2020年10月築　東京建…",
          "image": "https://img01.suumo.com/front/gazo/bukken/030/N010000/img/475/74544475/74544475_0012.jpg",
          "url": "https://suumo.jp/ms/chuko/tokyo/sc_shinagawa/nc_74544475/",
          "price": "購入価格： 7980万円 月々支払額： 19.04万円",
          "size": "専有面積： 45.33m2 間取り： 2DK",
          "age": "2020年10月",
          "updateDate": "2024-03-29T02:40:01Z"
        },
        {
          "category": "中古マンション",
          "name": "旗の台ガーデンタワー",
          "address": "東京都品川区旗の台２",
          "station": "東急大井町線/旗の台 －徒歩4分",
          "description": "-",
          "image": "https://img01.suumo.com/front/gazo/bukken/030/N010000/img/911/74456911/74456911_0001.jpg",
          "url": "https://suumo.jp/ms/chuko/tokyo/sc_shinagawa/nc_74456911/",
          "price": "購入価格： 1億900万円 月々支払額： 26.01万円",
          "size": "専有面積： 95.71m2（28.95坪）（壁芯） 間取り： 3LDK",
          "age": "1983年9月",
          "updateDate": "2024-03-29T02:40:01Z"
        }
      ]
    }
  }
}


```