/* english-mastery · 同步课堂课程数据源（国家中小学智慧教育平台）
 * 由 tools/fetch_courses.js 在你的登录 token 下抓取真实课程后写入本文件。
 * 当前为「示例数据」，仅用于验证播放链路；运行 fetch + download 后即为真实四年级课程。
 *
 * 数据结构：
 *   window.COURSES = {
 *     subject, edition, note,
 *     grades: [{
 *       key, label,
 *       volumes: [{
 *         key, label, materialId,
 *         units: [{
 *           title,
 *           lessons: [{
 *             title,                         // 课时名，如 "A Let's talk"
 *             platform,                      // 平台课程页深链（去平台看）
 *             local,                         // 可选：下载到本地的相对路径（mp4 或 playlist.m3u8）
 *             m3u8                           // 可选：平台原始 m3u8 地址（供下载脚本使用）
 *           }]
 *         }]
 *       }]
 *     }]
 *   }
 */
window.COURSES = {
  subject: "英语",
  edition: "人教版 PEP（三年级起点）",
  note: "【示例数据】本文件当前为演示用。运行 tools/fetch_courses.js（填入你的登录 token）即可拉取真实「四年级上/下册」课程，再跑 tools/download_courses.js 把视频下到本地离线看。",
  grades: [
    {
      key: "g4", label: "四年级",
      volumes: [
        {
          key: "a", label: "上册",
          materialId: "42ffa88d-2543-40d0-d69c-e5b5f065eae3",
          units: [
            {
              title: "Unit 1 My classroom",
              lessons: [
                { title: "A Let's talk", platform: "https://basic.smartedu.cn/syncClassroom/classActivity?activityId=42ffa88d-2543-40d0-d69c-e5b5f065eae3", local: "videos/g4/a/sample_lesson.mp4" },
                { title: "A Let's learn", platform: "https://basic.smartedu.cn/syncClassroom/classActivity?activityId=42ffa88d-2543-40d0-d69c-e5b5f065eae3" },
                { title: "B Let's talk", platform: "https://basic.smartedu.cn/syncClassroom/classActivity?activityId=42ffa88d-2543-40d0-d69c-e5b5f065eae3" }
              ]
            },
            {
              title: "Unit 2 My schoolbag",
              lessons: [
                { title: "A Let's talk", platform: "https://basic.smartedu.cn/syncClassroom/classActivity?activityId=42ffa88d-2543-40d0-d69c-e5b5f065eae3" },
                { title: "A Let's learn", platform: "https://basic.smartedu.cn/syncClassroom/classActivity?activityId=42ffa88d-2543-40d0-d69c-e5b5f065eae3" }
              ]
            }
          ]
        },
        {
          key: "b", label: "下册",
          materialId: "4901535c-9ae2-458e-bc0e-e5ed3f7a081d",
          units: [
            {
              title: "Unit 1 My school",
              lessons: [
                { title: "A Let's talk", platform: "https://basic.smartedu.cn/syncClassroom/classActivity?activityId=4901535c-9ae2-458e-bc0e-e5ed3f7a081d" },
                { title: "A Let's learn", platform: "https://basic.smartedu.cn/syncClassroom/classActivity?activityId=4901535c-9ae2-458e-bc0e-e5ed3f7a081d" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
