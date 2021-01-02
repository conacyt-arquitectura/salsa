<template>
  <div class="avatars">
    <div class="avatar">
      <verte v-model="color" model="hex"></verte>
      {{ color }}
      <avataaars
        :isCircle="avatar.isCircle"
        :avatarStyle="avatar.avatarStyle"
        :circleColor="avatar.circleColor"
        :accessoriesType="avatar.accessoriesType"
        :clotheType="avatar.clotheType"
        :clotheColor="avatar.clotheColor"
        :eyebrowType="avatar.eyebrowType"
        :eyeType="avatar.eyeType"
        :facialHairColor="avatar.facialHairColor"
        :facialHairType="avatar.facialHairType"
        :graphicType="avatar.graphicType"
        :hairColor="avatar.hairColor"
        :mouthType="avatar.mouthType"
        :skinColor="avatar.skinColor"
        :topType="avatar.topColor"
        :topColor="avatar.topColor"
      ></avataaars>
    </div>
  </div>
</template>

<script>
import Verte from "verte";
import "verte/dist/verte.css";
import { AvatarModel } from "./util/avatar.model";

export default {
  components: { Verte },
  data: function () {
    return {
      avatar: AvatarModel,
      color: "",
      count: 0,
    };
  },
};
</script>