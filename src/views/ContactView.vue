<template>
  <div class="contact">
    <div class="img-container animate">
      <img src="@/assets/images/03.png" alt="">
      <img src="@/assets/images/g36.jpg" alt="">
    </div>
    <div class="content">
      <h2 class="animate">CONTACT US</h2>
      <p class="animate">Whether you're exploring partnerships, seeking technical support, or interested in our latest innovations, our team is ready to assist.</p>
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        class="contact-form"
        @submit.prevent="onSubmit"
      >
        <el-row :gutter="16">
          <el-col :span="12">
            <el-form-item label="Name *" prop="firstName">
              <el-input v-model="form.firstName" placeholder="First Name" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label=" ">
              <el-input v-model="form.lastName" placeholder="Last Name" />
            </el-form-item>
          </el-col>
        </el-row>
        <!-- <div class="full-width-form-items"> -->
          <el-form-item label="Email *" prop="email">
            <el-input v-model="form.email" />
          </el-form-item>
          <el-form-item label="Company">
            <el-input v-model="form.company" />
          </el-form-item>
          <el-form-item label="Title">
            <el-input v-model="form.title" />
          </el-form-item>
          <el-form-item label="County *" prop="county">
            <el-input v-model="form.county" />
          </el-form-item>
          <el-form-item label="What aspect of content do you want to consult? *" prop="consult">
            <el-checkbox-group v-model="form.consult">
              <el-checkbox v-for="item in consultOptions" :key="item" :label="item">{{ item }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Can you briefly describe what assistance we can provide for you? *" prop="description">
            <el-input type="textarea" v-model="form.description" :autosize="{ minRows: 3 }" />
          </el-form-item>
          <el-form-item label="What channel did you find us through ? *" prop="channel">
            <el-select v-model="form.channel" placeholder="Please select">
              <el-option v-for="item in channelOptions" :key="item" :label="item" :value="item">
                <div class="flex items-center">
                  <!-- <el-icon v-if="form.channel == item" color="#409efc" class="no-inherit"> -->
                    <!-- <el-icon :size="20" color="red"><Edit /></el-icon> -->
                  <!-- </el-icon> -->
                  <span :style="{ color: item }">{{ item }}</span>
                </div>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">SUBMIT</el-button>
          </el-form-item>
        <!-- </div> -->
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const formRef = ref()
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  title: '',
  county: '',
  consult: [],
  description: '',
  channel: 'Exhibition',
})
const rules = {
  firstName: [
    { required: true, message: 'First Name is required', trigger: 'blur' }
  ],
  lastName: [
    { required: true, message: 'Last Name is required', trigger: 'blur' }
  ],
  email: [
    { required: true, message: 'Email is required', trigger: 'blur' },
    { type: 'email', message: 'Please input correct email', trigger: ['blur', 'change'] }
  ],
  county: [
    { required: true, message: 'County is required', trigger: 'blur' }
  ],
  consult: [
    { type: 'array', required: true, message: 'Please select at least one', trigger: 'change' }
  ],
  description: [
    { required: true, message: 'Please describe your needs', trigger: 'blur' }
  ],
  channel: [
    { required: true, message: 'Please select a channel', trigger: 'change' }
  ]
}
const consultOptions = [
  'Business cooperation',
  'Enterprise procurement',
  'Personal purchase of products',
  'Media cooperation',
  'Other'
]
const channelOptions = [
  'Exhibition',
  'Website',
  'Friend',
  'Other'
]
const onSubmit = () => {
  formRef.value.validate((valid: boolean) => {
    if (valid) {
      ElMessage.success('Submit success!')
    } else {
      ElMessage.error('Please check the form!')
    }
  })
}
</script>

<style scoped lang="scss">
.contact {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 5rem;
  .img-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img {
      
      object-fit: cover;
      &:nth-child(1) {
        width: 180%;
        height: 50%;
        object-fit: cover;
      }
      &:nth-child(2) {
        width: 89%;

      }
    }
  }
  .content {
    // height: 100%;
    padding: 2rem;
    h2 {
      font-size: 3rem;
      font-family: Anton;
    }
    p {
      margin-bottom: 20px;
      font-family: fantasy;
    }
    .contact-form {
      margin-top: 24px;
      // max-width: 600px;
      .el-form-item {
        margin-bottom: 18px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        :deep(.el-form-item__label) {
          // width: 100%;
          text-align: left;
          margin-bottom: 6px;
          line-height: 1.2;
          font-weight: 500;
        }
        :deep(.el-form-item__content)  {
          width: 100%;
          height: 30px;
          .el-input__inner,.el-select__wrapper {
            height: 44px;
          }
          .el-input__wrapper {
            border-radius: 0px;
            // border: 1px solid #A9A9A9;
            box-shadow: 0 0 0 1px #A9A9A9 inset;
          }
          .el-select__wrapper {
            box-shadow: 0 0 0 1px #A9A9A9 inset;
          }
          .el-textarea:focus-within {
            box-shadow: 0 0 0 1px #A9A9A9 inset;
          }
          .el-select__wrapper {
            border-radius: 0px;
          }
          .el-textarea__inner {
            border-radius: 0px;
          }
          // .el-input__wrapper::after {
          //   content: "";
          //   pointer-events: none;
          //   position: absolute;
          //   top: 4px; left: 4px; right: 4px; bottom: 4px;
          //   border: 1px solid #409EFF; // 内层线颜色
          //   border-radius: 0;
          //   z-index: 2;
          //   transition: border-color 0.2s;
          //   opacity: 0;
          // }
          // :deep(.el-input__wrapper.is-focus)::after {
          //   opacity: 1;
          // }
          .is-focus {
           box-shadow: 0 0 0 1px #A9A9A9 inset;
          }
        }

        .el-button {
          border-radius: 50px;
          border: 2px solid #000;
          color:#000;
          height: 60px;
          width: 130px;
          background-color: #fff;
        }
      }
      .el-input, .el-select, textarea {
        width: 100%;
      }
      .el-checkbox-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      
    }
  }
}
@media (max-width: 768px) {
  .contact {
    display: block;
    .img-container {
      flex-direction: row-reverse;
      padding: 2rem;
      img {
        object-fit: cover;
        &:nth-child(1) {
          width: 50%;
          height: 100%;
        }
        &:nth-child(2) {
          width: 50%;
          height: 100%;
        }

      }
    }
    .content {
      .contact-form {
        max-width: 100%;
      }
    }
  }
  
}
// .contact-form .el-form-item__label {
//   text-align: left !important;
//   justify-content: flex-start !important;
//   padding-left: 0 !important;
// }
// .full-width-form-items {
//   width: 100%;
//   .el-form-item {
//     width: 100%;
//     max-width: 100%;
//     .el-form-item__content {
//       width: 100%;
//     }
//   }
// }


:deep(.el-input__wrapper) {
  position: relative;
  z-index: 1;
  background: #fff;
}
:deep(.el-input__wrapper)::after {
  content: "";
  pointer-events: none;
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 2px solid #000;
  border-radius: 0;
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 2;
}
:deep(.el-input__wrapper.is-focus)::after {
  opacity: 1;
}

:deep(.el-textarea) {
  position: relative;
  z-index: 1;
}
:deep(.el-textarea)::after {
  content: "";
  pointer-events: none;
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 2px solid #000;
  border-radius: 0;
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 2;
}
:deep(.el-textarea:focus-within)::after {
  opacity: 1;
}

:deep(.el-select .el-select__wrapper.is-focused) {
  position: relative;
  z-index: 1;
  background: #fff;
}
:deep(.el-select .el-select__wrapper.is-focused)::after {
  content: "";
  pointer-events: none;
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 2px solid #000;
  border-radius: 0;
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 2;
}
:deep(.el-select.is-focused)::after,
:deep(.el-select .el-select__wrapper.is-focused)::after {
  opacity: 1;
}

</style>
