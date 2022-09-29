const { Room, ChatContent, Participation } = require("../model");
const { Op } = require("sequelize");
const sequelize = require("sequelize");

// 채팅 페이지
exports.roomlist = (req, res) => {
  res.render("socket/roomList");
};
exports.socket = (req, res) => {
  res.render("socket/socket", { room_id: req.params.id });
};

// 채팅 방 만들기
exports.socket_create = (req, res) => {
  const data = {
    name: req.body.title,
  };
  Room.create(data).then((result) => {
    console.log(result);
    const chat_data = {
      room_id: result.id,
      content: "",
    };
    ChatContent.create(chat_data).then((result) => {});
    const participation_my_data = {
      user_id: req.body.user_id,
      room_id: result.id,
    };
    const participation_other_data = {
      user_id: req.body.other_id,
      room_id: result.id,
    };
    Participation.create(participation_my_data).then((result) => {});
    Participation.create(participation_other_data).then((result) => {});
    res.send({ id: result.id });
  });
};

// 채팅 방 확인
exports.socket_check = (req, res) => {
  // sequelize.query(sql, { type: ~~.SELECT})
  Participation.findOne({
    attributes: ["room_id", [sequelize.fn("count", "*"), "count"]],
    where: {
      [Op.or]: [{ user_id: req.body.other_id }, { user_id: req.body.user_id }],
    },
    group: ["room_id"],
    // order: sequelize.literal("count DESC"),
    having: sequelize.where(sequelize.col("count"), {
      [Op.gte]: 2,
    }),
  }).then((result) => {
    const data = result;
    if (data) res.send(data);
    else res.send(data);
  });
};

// 채팅 내용 찾기
exports.socket_content = (req, res) => {
  Room.findOne({
    raw: true,
    include: [ChatContent],
    where: {
      id: req.body.room_id,
    },
  }).then((result) => {
    console.log(result);
    const data = result;
    res.send(data);
  });
};
