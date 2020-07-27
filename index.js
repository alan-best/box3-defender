global.defenderStats = {
  worldSay: 0,
  selector: 0,
  voxels: 0,
  createEntity:0,
  // forceMode: false,
};
let defenderFun = (stat) => {
  return function () {
    defenderStats[stat] += 1;
  };
};
world.onTick(() => {
  console.clear();
  console.log(
    [
      "---Box3防火墙---",
      `拦截系统消息:${defenderStats.worldSay}`,
      `拦截选择器命令: ${defenderStats.selector}`,
      `拦截方块操作: ${defenderStats.voxels}`,
      `拦截实体创建操作: ${defenderStats.createEntity}`,
    ].join("\n")
  );
  // if (defenderStats.forceMode) {
  //   console.error("强力模式已打开");
  // }
  console.log("---------------");
});
(async function () {
  let backup = {
    world: Object.assign({}, world),
  };

  world.say = defenderFun("worldSay");
  world.querySelectorAll = defenderFun("selector");
  world.querySelector = defenderFun("selector");
  voxels.setVoxel = defenderFun("voxels");
  world.createEntity = defenderFun("createEntity");
  // world.say = defenderFun("worldSay");

  // if (defenderStats.forceMode) {
  //   world._say = world.say;
  // }
})();
