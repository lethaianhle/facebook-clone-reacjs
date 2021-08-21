import React from 'react'
import "./StoryReel.css"
import Story from './Story'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYXdk9PBNx7fcc4xmsr3uAS-UHmm19nmcpg&usqp=CAU"
                profileSrc = "https://assets.teenvogue.com/photos/6007356e60818a1282c8b811/master/pass/133772024_198651958585628_1612743571200036022_n.jpg"
                title = "Lalisa Manoban"
            />
            <Story
                image= "https://cly.1cdn.vn/2021/02/03/lisa8.jpg"
                profileSrc = "https://media.viezone.vn/prod/2021/7/25/Screenshot_2021_06_17_at_10_29_40_feeaa0e45a.png"
                title = "Thái Lê's Wife"
            />
            <Story
                image= "https://i.pinimg.com/originals/38/2b/ac/382bac65bcb8eea95f43443fc4e7a2b5.jpg"
                profileSrc = "https://1409791524.rsc.cdn77.org/data/images/full/574654/lisa.jpg"
                title = "Lisa"
            />
            <Story
                image= "https://dep365.com/wp-content/uploads/2019/10/moonshot_korea_67973758_130266884972780_4907462012386086047_n.jpg"
                profileSrc = "https://pbs.twimg.com/profile_images/1214465358981029888/H8xw2866.jpg"
                title = "Thái Lê's Girlfriend"
            />
            <Story
                image= "https://i.pinimg.com/originals/52/f5/a4/52f5a4e0ccc906afad3fe4434db538bd.jpg"
                profileSrc = "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/172870691_2689078574723590_7622278428844004761_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Yqm0rNhnn1IAX-82TXP&_nc_ht=scontent-hkt1-1.xx&oh=38d1bf0aca000372677a265b33556494&oe=61441192"
                title = "Thái Lê"
            />
        </div>
    )
}

export default StoryReel
