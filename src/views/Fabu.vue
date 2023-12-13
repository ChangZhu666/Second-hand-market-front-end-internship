<script  setup>
import  Breadcrumb  from '../components/breadcrumb.vue';
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import axios from 'axios';
import { useCounterStore } from '@/store/counter';

const store = useCounterStore();

    const ruleForm = ref({
      name: '',
      price: 0,
      number: 0,
      image: '',
      id: 1,
      Introduction: '',
    });

    const rules = ref({
  name: [
    { required: true, message: '请输入商品名称', trigger: 'blur' },
    { max: 20, message: '商品名称不能超过20个字符', trigger: 'blur' }
  ],
  price: [
    { required: true, message: '请输入价格', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (Number(value) <= 0) {
          callback(new Error('价格必须大于0'));
        } else {
          callback();
        }
      },
      trigger: 'blur'
    }
  ],
  number: [
    { required: true, message: '请输入数量', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (Number(value) <= 0) {
          callback(new Error('数量必须大于0'));
        } else {
          callback();
        }
      },
      trigger: 'blur'
    }
  ],
  Introduction: [
    { max: 200, message: '字数不能超过200个字符', trigger: 'blur' }
  ]
});

const ruleFormRef = ref(null);
const submitForm = () => {
  console.log(ruleFormRef.value.validate);
  ruleFormRef.value.validate(async (valid) => {
    // valid: 所有表单都通过校验  才为true
    console.log(valid)
    // 以valid做为判断条件 如果通过校验才执行登录逻辑
    if (valid) {
      // TODO LOGIN
      const oldlength = store.data.length
      store.adddata(ruleForm)
      // 检查数据是否成功添加
      const Added = store.data.length > oldlength ;

      store.addfabu(ruleForm)
      if (Added) {
      // 如果数据成功添加，显示成功消息
      ElMessage({type: 'success', message: '成功发布商品', });
      } else {
      // 如果数据未成功添加，显示错误消息或采取其他操作
      ElMessage({ type: 'error', message: '发布商品失败，请重试', });
      }
      }
})
}


const resetForm = () => {
  ruleForm.value = {
    name: '',
    price: 0,
    number: 0,
    image: '',
    Introduction: '',
    id: 0
  };
};

const uploadApi = 'https://api.imgbb.com/1/upload';
const apiKey = 'a20859226372478c85ad9670b853f811'; // 在 imgbb 上获得的 API Key

const beforeUpload = (file) => {
  const formData = new FormData();
  formData.append('image', file);

  // 发送文件到 imgbb
  axios.post(uploadApi, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    params: {
      key: apiKey,
    },
  })
  .then((response) => {
    // 上传成功，获取图片 URL
    ruleForm.value.image = response.data.data.url;
  })
  .catch((error) => {
    // 上传失败，给出错误提示
    ElMessage.error('Failed to upload image.');
    console.error(error);
  });

  // 阻止文件上传，因为我们要使用 AJAX 进行上传
  return false;
};
</script>

<template>
    <div class="main">
      <Breadcrumb></Breadcrumb>
        <div class="container">
          <h2 style="text-align:center">发布二手商品</h2>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" status-icon  label-width="200px" class="demo-ruleForm" label-position="top" size="large" >
          <el-form-item label="商品名称" prop="name" required style="width: 50%">
            <el-input v-model="ruleForm.name" type="text" autocomplete="off" />
          </el-form-item>
          <el-form-item label="价格(￥)" prop="price" required style="width: 25%">
            <el-input v-model="ruleForm.price" type="number" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="数量" prop="number" required style="width: 25%">
            <el-input v-model="ruleForm.number" type="number" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="介绍" prop="Introduction" size="large" style="width: 100%">
            <el-input v-model="ruleForm.Introduction" type="textarea" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="图片" prop="image" >
            <el-upload class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple  :before-upload="beforeUpload">
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
             上传图片文件 <em>点击上传</em>
            </div>
            <template #tip>
                <div class="el-upload__tip">
                jpg / png 文 件 最 大 支 持 上 传 500 kb
                </div>
            </template>
            </el-upload>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>

        </div>
    </div>
</template>

<style scoped>
.main{
    height: 1080px;
    width: 1800px;  
}
.container{
    margin: 30px auto;
    height: 100%;
    width: 30%;
}
.breadcrumb{
    padding-top: 19px;
    padding-left: 25px;
    height: 38px;
    background-color: rgb(67,74,80);
}
.el-breadcrumb{
    font-size: 18px;
    
}

</style>