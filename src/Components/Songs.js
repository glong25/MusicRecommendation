const Songs = [
  {
    id: 1,
    favourite: false,
    songName: "Một ngàn nỗi đau",
    artist: "Bun & Orin",
    song: "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Ringtone%2FM%E1%BB%99t%20Ng%C3%A0n%20N%E1%BB%97i%20%C4%90au%20-%20V%C4%83n%20Mai%20H%C6%B0%C6%A1ng%20-%20Bun%20%26%20Orin%20Cover.mp3?alt=media&token=d070aa65-0287-4c03-803d-598ba4f9ae65",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Images%2Fbun.jpg?alt=media&token=9036e0aa-4129-43ee-9c7b-58876527bd63",
  },
  {
    id: 2,
    favourite: false,
    songName: "Chưa quên người yêu cũ",
    artist: "August.Đỗ Hải Đăng",
    song: "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Ringtone%2FCH%C6%AFA%20QU%C3%8AN%20NG%C6%AF%E1%BB%9CI%20Y%C3%8AU%20C%C5%A8%20-%20H%C3%80%20NHI%20x%20H%E1%BB%A8A%20KIM%20TUY%E1%BB%80N%20-%20AUGUST.%20%C4%90%E1%BB%96%20H%E1%BA%A2I%20%C4%90%C4%82NG%20COVER.mp3?alt=media&token=77a1065a-30ff-4afd-9c47-7908a42e996e",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Images%2Fdohaidang.jpg?alt=media&token=77d77029-8707-4795-967b-3b78f9045484",
  },
  {
    id: 3,
    favourite: false,
    songName: "Sau lưng anh có ai kìa ",
    artist: "Bun & Orin",
    song: "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Ringtone%2FSAU%20L%C6%AFNG%20ANH%20C%C3%93%20AI%20K%C3%8CA%20(Acoustic%20Ver.)%20-%20THI%E1%BB%80U%20B%E1%BA%A2O%20TR%C3%82M%20-%20Bun%20%26%20Orin%20Cover.mp3?alt=media&token=079ff59b-4c4e-4cd7-b02f-970b67bb7602",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Images%2Fsau%20lung%20anh%20co%20ai%20kia.jpg?alt=media&token=04aaa683-1901-47fc-8862-de730671cbcd",
  },
  {
    id: 4,
    favourite: false,
    songName: "Là bạn không thể yêu",
    artist: "Huy Vạc",
    song: "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Ringtone%2FL%C3%80%20B%E1%BA%A0N%20KH%C3%94NG%20TH%E1%BB%82%20Y%C3%8AU%20-%20LOU%20HO%C3%80NG%20-%20HUY%20V%E1%BA%A0C%20COVER.mp3?alt=media&token=121a3291-9767-4bd1-bec3-184f73edbaa9",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Images%2Fhuyvac.jpg?alt=media&token=d55d4d46-1a99-498d-8261-7404f916f53c",
  },
  {
    id: 5,
    favourite: false,
    songName: "Cuộc sống em ổn không",
    artist: "Bun & Orin",
    song: "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Ringtone%2FCU%E1%BB%98C%20S%E1%BB%90NG%20EM%20%E1%BB%94N%20KH%C3%94NG%20(%20Acoustic%20Ver.%20)%20-%20Bun%20%26%20Orin%20Cover.mp3?alt=media&token=361a7954-a0b1-42a6-9413-f15f0344c2a2",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Images%2Fcuocsongemonk.jpg?alt=media&token=ee4999d6-37e7-4450-a8c8-898dab919f47",
  },
  {
    id: 6,
    songName: "Đừng vì anh mà khóc",
    artist: "Cover - Huy Vạc",
    song: "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Ringtone%2F%C4%90%E1%BB%ABng%20V%C3%AC%20Anh%20M%C3%A0%20Kh%C3%B3c%20-%20Quang%20H%C3%B9ng%20-%20Huy%20V%E1%BA%A1c%20Cover.mp3?alt=media&token=2347035f-96d1-491a-97c9-9c11f39ee0ca",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Images%2Fdvamk.jpg?alt=media&token=5fbb15e9-7f8f-4e62-9625-22335af25b43",
  },
  {
    id: 7,
    favourite: false,
    songName: "Anh sẽ ổn thôi - Cao ốc 20",
    artist: "Phạm Nguyên Ngọc",
    song: "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Ringtone%2FPh%E1%BA%A1m%20Nguy%C3%AAn%20Ng%E1%BB%8Dc%20-%20Mashup%20-Anh%20s%E1%BA%BD%20%E1%BB%95n%20th%C3%B4i%20%26%20Cao%20%E1%BB%91c%2020-.mp3?alt=media&token=04edf7e0-fddc-4edb-a743-2aa63abbd8bf",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Images%2Fpham%20nguyen%20ngoc.jpg?alt=media&token=d49ba57b-26f0-48af-a40c-efccf8523247",
  },
  {
    id: 8,
    favourite: false,
    songName: "Khi cô đơn em nhớ ai",
    artist: "Cover - Lưu Tuấn Phong",
    song: "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Ringtone%2FKhi%20C%C3%B4%20%C4%90%C6%A1n%20Em%20Nh%E1%BB%9B%20Ai%20-%20L%C6%B0u%20Tu%E1%BA%A5n%20Phong%20(Acoustic%20Cover).mp3?alt=media&token=dd9c35ad-ce58-4bd5-888d-20e6f905acc5",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Images%2FKhi%20C%C3%B4%20%C4%90%C6%A1n%20Em%20Nh%E1%BB%9B%20Ai.jpg?alt=media&token=551d9456-681d-4d78-95f9-55c3117bcda4",
  },
  {
    id: 9,
    favourite: false,
    songName: "Sợ rằng em biết anh còn yêu em ",
    artist: "Juun Đăng dũng",
    song: "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Ringtone%2FJUUN%20D%20-%20S%E1%BB%A2%20R%E1%BA%B0NG%20EM%20BI%E1%BA%BET%20ANH%20C%C3%92N%20Y%C3%8AU%20EM%20(Afraid%20You%20Know%20I%E2%80%99m%20Still%20In%20Love)%20(OFFICIAL%20MV).mp3?alt=media&token=60bc9b84-2c3f-4d3e-957b-5235fb22e590",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Images%2Fjdangdung.jpg?alt=media&token=b160701b-8f27-4b53-81bf-5ba49e2e232e",
  },
  {
    id: 10,
    favourite: false,
    songName: "Hết Thương Cạn Nhớ",
    artist: "Đức Fúc ",
    song: "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Ringtone%2FH%E1%BA%BET%20TH%C6%AF%C6%A0NG%20C%E1%BA%A0N%20NH%E1%BB%9A%20-%20%C4%90%E1%BB%A8C%20PH%C3%9AC.mp3?alt=media&token=726f6f59-0587-4f78-9314-bdf615c50278",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Images%2Fhetthuongcannho.jpg?alt=media&token=63a2f37e-45bb-4602-b8f3-6255d1baeb78",
  },
  {
    id: 11,
    favourite: false,
    songName: "Nếu lúc trước em đừng tới",
    artist: "Phạm Đình Thái Ngân",
    song: "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Ringtone%2FN%E1%BA%BEU%20L%C3%9AC%20TR%C6%AF%E1%BB%9AC%20EM%20%C4%90%E1%BB%AANG%20T%E1%BB%9AI%20-%20PH%E1%BA%A0M%20%C4%90%C3%8CNH%20TH%C3%81I%20NG%C3%82N%20-%20%5B%20LIVE%20COVER%20%5D.mp3?alt=media&token=bc69f508-f795-470d-a862-1a812046f05b",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Images%2Fneuluctruocemdungtoi.jpg?alt=media&token=788c4a41-5fd1-4d0a-87b2-54e384c555fa",
  },
  {
    id: 12,
    favourite: false,
    songName: "MASHUP-2019",
    artist: "Trung Thông",
    song: "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Ringtone%2FMashup%20Hit%202019%20-%20Trung%20Th%C3%B4ng.mp3?alt=media&token=4e8c1254-3cdf-40f2-9bf4-02bb774a4666",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Images%2Ftrungthong.jpg?alt=media&token=eae6bd74-e8bf-41dd-9ede-16843d087276",
  },
  {
    id: 13,
    favourite: false,
    songName: "Tệ thật, Anh nhớ em",
    artist: "Trung Thông",
    song: "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Ringtone%2FT%E1%BB%86%20TH%E1%BA%ACT%2C%20ANH%20NH%E1%BB%9A%20EM%20-%20THANH%20H%C6%AFNG%20-%20TRUNG%20TH%C3%94NG%20COVER.mp3?alt=media&token=ef722726-88bf-4643-9119-fe78b1047cc5",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Images%2Ftrungthong2.jpg?alt=media&token=8e8391e2-01bc-4850-992c-449aaf8f4ca0",
  },
  {
    id: 14,
    favourite: false,
    songName: "Nợ ai đó lời xin lỗi",
    artist: "Bun & Orin",
    song: "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Ringtone%2FN%E1%BB%A2%20AI%20%C4%90%C3%93%20L%E1%BB%9CI%20XIN%20L%E1%BB%96I%20(Bozitt)%20-%20Bun%20%26%20Orin%20Cover.mp3?alt=media&token=d3363203-7c2f-4e17-aee0-ed82f2ee61a8",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Images%2Fnadlxl.jpg?alt=media&token=48dc76ff-4f97-4b93-a292-742e9f75520b",
  },
  {
    id: 15,
    favourite: false,
    songName: "Day dứt nỗi đau",
    artist: "Bun & Orin",
    song: "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Ringtone%2FDay%20D%E1%BB%A9t%20N%E1%BB%97i%20%C4%90au%20-%20Mr.%20Siro%20-%20Bun%20%26%20Orin%20Cover.mp3?alt=media&token=5aa71c85-f702-4322-9bc0-9c01a2d726c2",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Images%2Fddnd.jpg?alt=media&token=28c1cb4d-11c0-47ed-99c9-b235ba5aa3bc",
  },
  {
    id: 16,
    favourite: false,
    songName: "Cuối cùng thì",
    artist: "Bun & Orin",
    song: "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Ringtone%2FCu%E1%BB%91i%20C%C3%B9ng%20Th%C3%AC%20-%20Jack%20-%20Bun%20%26%20Orin%20Guitar%20Cover.mp3?alt=media&token=ce841c13-ddf4-4090-bea1-8ad23b1ffb8b",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/sptf-next.appspot.com/o/Images%2Fcuoicungthi.jpg?alt=media&token=95f5709d-db7b-43b5-8a31-55274d5445d0",
  },
];

export { Songs };
