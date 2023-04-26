<template>
  <div class="login-container">
    <!--登录表单-->
    <el-form ref="formRef" :model="form" class="login-form">
      <!--登录字体-->
      <div class="title-container">
        <h3>用户登录</h3>
      </div>

      <el-form-item>
        <el-icon :size="20" class="svg-container">
          <User/>
        </el-icon>
        <el-input v-model="form.name" placeholder="请输入用户名"/>
      </el-form-item>


      <el-form-item>
        <el-icon :size="20" class="svg-container">
          <Lock/>
        </el-icon>
        <el-input v-model="form.password" placeholder="请输入密码" show-password/>
      </el-form-item>

      <el-button type="primary" class="login-button">登录</el-button>


    </el-form>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {Lock, User} from '@element-plus/icons-vue'

const form = ref({
  name: ''
})

</script>

<style lang="scss" scoped>

/*深色系*/
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(135deg, #5f677a 0%, #1f305e 50%, #312f2f 100%);
  position: relative;
  overflow: hidden;
}


.login-form {
  width: 350px;
  padding: 30px 20px;
  background-color: rgba(236, 230, 230, 0.61);
  border-radius: 5px;
  /*box-shadow: 0 4px 6px rgb(125, 136, 169);*/
}

.title-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

h3 {
  font-size: 24px;
  font-weight: bold;
  color: #000000;
}

.el-form-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: rgba(164, 104, 140, 0.76);
}

.el-form-item:last-child {
  margin-bottom: 30px;
  color: rgba(104, 164, 144, 0.2);
}

.svg-container {
  margin-right: 10px;
}

.el-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: rgb(98, 99, 103);
}

.el-input {
  flex: 1;
}

.login-button {
  width: 100%;
  font-size: 18px;
  color: rgb(30, 31, 34);
}
</style>










