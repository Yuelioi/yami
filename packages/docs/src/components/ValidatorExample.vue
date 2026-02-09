<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const username = ref('')
const message = ref('')
const agreeTerms = ref(false)

const apiClasses = [
  // 基础
  {
    category: '基础',
    className: 'validate',
    description: '表单验证容器，自动根据原生 HTML5 验证状态显示成功/错误样式。',
    isCategoryStart: true,
  },

  // 验证状态类
  {
    category: '验证状态',
    className: 'is-valid',
    description: '手动标记元素为验证成功状态，适用于自定义验证逻辑。',
    isCategoryStart: false,
  },
  {
    category: '验证状态',
    className: 'is-invalid',
    description: '手动标记元素为验证失败状态，适用于自定义验证逻辑。',
    isCategoryStart: false,
  },

  // 消息类
  {
    category: '消息提示',
    className: 'success-message',
    description: '成功消息样式，在验证成功时自动显示。',
    isCategoryStart: false,
  },
  {
    category: '消息提示',
    className: 'error-message',
    description: '错误消息样式，在验证失败时自动显示。',
    isCategoryStart: false,
  },
  {
    category: '消息提示',
    className: 'helper-text',
    description: '辅助文本样式，用于显示额外说明信息。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Form Validation 表单验证"
      description="基于 HTML5 原生验证和自定义验证状态的表单验证系统。提供即时反馈，帮助用户正确填写表单。遵循 WCAG 2.1 AA 无障碍标准。"
    />

    <ApiReference :data="apiClasses" />

    <DocsSection title="原生 HTML5 验证">
      <form class="validate space-y-4 max-w-md" @submit.prevent>
        <div>
          <label for="native-email" class="label">
            <span class="label-text">电子邮件</span>
          </label>
          <input
            id="native-email"
            v-model="email"
            type="email"
            class="input w-full"
            placeholder="your@email.com"
            required
            aria-required="true"
            aria-describedby="email-error email-success"
          />
          <p id="email-error" class="error-message">
            <span class="icon-[lucide--alert-circle] inline-block align-middle"></span>
            请输入有效的电子邮件地址
          </p>
          <p id="email-success" class="success-message">
            <span class="icon-[lucide--check-circle] inline-block align-middle"></span>
            电子邮件格式正确
          </p>
        </div>

        <div>
          <label for="native-password" class="label">
            <span class="label-text">密码</span>
          </label>
          <input
            id="native-password"
            v-model="password"
            type="password"
            class="input w-full"
            placeholder="至少 8 个字符"
            minlength="8"
            required
            aria-required="true"
            aria-describedby="password-error password-success"
          />
          <p id="password-error" class="error-message">
            <span class="icon-[lucide--alert-circle] inline-block align-middle"></span>
            密码至少需要 8 个字符
          </p>
          <p id="password-success" class="success-message">
            <span class="icon-[lucide--check-circle] inline-block align-middle"></span>
            密码强度良好
          </p>
        </div>

        <div>
          <label for="native-username" class="label">
            <span class="label-text">用户名</span>
          </label>
          <input
            id="native-username"
            v-model="username"
            type="text"
            class="input w-full"
            placeholder="3-20 个字符"
            pattern="[a-zA-Z0-9_]{3,20}"
            required
            aria-required="true"
            aria-describedby="username-error username-success username-helper"
          />
          <p id="username-helper" class="helper-text">只能包含字母、数字和下划线</p>
          <p id="username-error" class="error-message">
            <span class="icon-[lucide--alert-circle] inline-block align-middle"></span>
            用户名必须是 3-20 个字符，且只能包含字母、数字和下划线
          </p>
          <p id="username-success" class="success-message">
            <span class="icon-[lucide--check-circle] inline-block align-middle"></span>
            用户名可用
          </p>
        </div>

        <button type="submit" class="btn btn-primary w-full">提交</button>
      </form>
    </DocsSection>

    <DocsSection title="手动验证状态">
      <div class="space-y-4 max-w-md">
        <div>
          <label for="manual-success" class="label">
            <span class="label-text">成功状态</span>
          </label>
          <input
            id="manual-success"
            type="text"
            class="input w-full is-valid"
            value="验证成功的输入"
            aria-describedby="manual-success-msg"
          />
          <p id="manual-success-msg" class="helper-text text-success">
            <span class="icon-[lucide--check-circle] inline-block align-middle"></span>
            数据验证通过
          </p>
        </div>

        <div>
          <label for="manual-error" class="label">
            <span class="label-text">错误状态</span>
          </label>
          <input
            id="manual-error"
            type="text"
            class="input w-full is-invalid"
            value="验证失败的输入"
            aria-invalid="true"
            aria-describedby="manual-error-msg"
          />
          <p id="manual-error-msg" class="helper-text text-error">
            <span class="icon-[lucide--alert-circle] inline-block align-middle"></span>
            请检查输入内容
          </p>
        </div>

        <div>
          <label for="manual-normal" class="label">
            <span class="label-text">普通状态</span>
          </label>
          <input
            id="manual-normal"
            type="text"
            class="input w-full"
            placeholder="未验证的输入"
            aria-describedby="manual-normal-helper"
          />
          <p id="manual-normal-helper" class="helper-text">
            <span class="icon-[lucide--info] inline-block align-middle"></span>
            请输入内容
          </p>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="多种输入类型验证">
      <form class="validate space-y-4 max-w-md" @submit.prevent>
        <div>
          <label for="url-input" class="label">
            <span class="label-text">网站地址</span>
          </label>
          <input
            id="url-input"
            type="url"
            class="input w-full"
            placeholder="https://example.com"
            required
            aria-describedby="url-error url-success"
          />
          <p id="url-error" class="error-message">
            <span class="icon-[lucide--alert-circle] inline-block align-middle"></span>
            请输入有效的网址（包含 http:// 或 https://）
          </p>
          <p id="url-success" class="success-message">
            <span class="icon-[lucide--check-circle] inline-block align-middle"></span>
            网址格式正确
          </p>
        </div>

        <div>
          <label for="number-input" class="label">
            <span class="label-text">年龄</span>
          </label>
          <input
            id="number-input"
            type="number"
            class="input w-full"
            placeholder="18-100"
            min="18"
            max="100"
            required
            aria-describedby="number-error number-success"
          />
          <p id="number-error" class="error-message">
            <span class="icon-[lucide--alert-circle] inline-block align-middle"></span>
            年龄必须在 18-100 之间
          </p>
          <p id="number-success" class="success-message">
            <span class="icon-[lucide--check-circle] inline-block align-middle"></span>
            年龄有效
          </p>
        </div>

        <div>
          <label for="date-input" class="label">
            <span class="label-text">出生日期</span>
          </label>
          <input
            id="date-input"
            type="date"
            class="input w-full"
            required
            aria-describedby="date-error date-success"
          />
          <p id="date-error" class="error-message">
            <span class="icon-[lucide--alert-circle] inline-block align-middle"></span>
            请选择出生日期
          </p>
          <p id="date-success" class="success-message">
            <span class="icon-[lucide--check-circle] inline-block align-middle"></span>
            日期已选择
          </p>
        </div>

        <div>
          <label for="tel-input" class="label">
            <span class="label-text">手机号码</span>
          </label>
          <input
            id="tel-input"
            type="tel"
            class="input w-full"
            placeholder="13812345678"
            pattern="1[3-9]\d{9}"
            required
            aria-describedby="tel-error tel-success"
          />
          <p id="tel-error" class="error-message">
            <span class="icon-[lucide--alert-circle] inline-block align-middle"></span>
            请输入有效的手机号码
          </p>
          <p id="tel-success" class="success-message">
            <span class="icon-[lucide--check-circle] inline-block align-middle"></span>
            手机号码格式正确
          </p>
        </div>
      </form>
    </DocsSection>

    <DocsSection title="文本域验证">
      <form class="validate space-y-4 max-w-md" @submit.prevent>
        <div>
          <label for="message-textarea" class="label">
            <span class="label-text">留言内容</span>
            <span class="label-text-alt">必填</span>
          </label>
          <textarea
            id="message-textarea"
            v-model="message"
            class="textarea w-full"
            placeholder="请输入您的留言（至少 10 个字符）"
            rows="4"
            minlength="10"
            maxlength="500"
            required
            aria-required="true"
            aria-describedby="message-error message-success message-helper"
          ></textarea>
          <p id="message-helper" class="helper-text">{{ message.length }}/500 字符</p>
          <p id="message-error" class="error-message">
            <span class="icon-[lucide--alert-circle] inline-block align-middle"></span>
            留言至少需要 10 个字符
          </p>
          <p id="message-success" class="success-message">
            <span class="icon-[lucide--check-circle] inline-block align-middle"></span>
            内容长度合适
          </p>
        </div>
      </form>
    </DocsSection>

    <DocsSection title="选择框验证">
      <form class="validate space-y-4 max-w-md" @submit.prevent>
        <div>
          <label for="country-select" class="label">
            <span class="label-text">选择国家/地区</span>
          </label>
          <select
            id="country-select"
            class="select w-full"
            required
            aria-required="true"
            aria-describedby="country-error country-success"
          >
            <option value="" disabled selected>请选择</option>
            <option value="cn">中国</option>
            <option value="us">美国</option>
            <option value="uk">英国</option>
            <option value="jp">日本</option>
          </select>
          <p id="country-error" class="error-message">
            <span class="icon-[lucide--alert-circle] inline-block align-middle"></span>
            请选择一个国家/地区
          </p>
          <p id="country-success" class="success-message">
            <span class="icon-[lucide--check-circle] inline-block align-middle"></span>
            已选择
          </p>
        </div>
      </form>
    </DocsSection>

    <DocsSection title="复选框和单选框验证">
      <form class="validate space-y-6 max-w-md" @submit.prevent>
        <div>
          <label class="label">
            <span class="label-text">选择您的兴趣（至少选择一项）</span>
          </label>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                class="checkbox"
                value="coding"
                required
                aria-describedby="interest-error"
              />
              <span>编程</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" class="checkbox" value="design" />
              <span>设计</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" class="checkbox" value="music" />
              <span>音乐</span>
            </label>
          </div>
          <p id="interest-error" class="error-message">
            <span class="icon-[lucide--alert-circle] inline-block align-middle"></span>
            请至少选择一项兴趣
          </p>
        </div>

        <div>
          <label class="label">
            <span class="label-text">选择性别</span>
          </label>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                class="radio"
                value="male"
                required
                aria-required="true"
                aria-describedby="gender-error"
              />
              <span>男</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="gender" class="radio" value="female" />
              <span>女</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="gender" class="radio" value="other" />
              <span>其他</span>
            </label>
          </div>
          <p id="gender-error" class="error-message">
            <span class="icon-[lucide--alert-circle] inline-block align-middle"></span>
            请选择性别
          </p>
        </div>

        <div>
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              v-model="agreeTerms"
              type="checkbox"
              class="checkbox"
              required
              aria-required="true"
              aria-describedby="terms-error terms-success"
            />
            <span class="label-text">我已阅读并同意服务条款</span>
          </label>
          <p id="terms-error" class="error-message">
            <span class="icon-[lucide--alert-circle] inline-block align-middle"></span>
            您必须同意服务条款才能继续
          </p>
          <p id="terms-success" class="success-message">
            <span class="icon-[lucide--check-circle] inline-block align-middle"></span>
            感谢您的确认
          </p>
        </div>
      </form>
    </DocsSection>

    <DocsSection title="开关验证">
      <form class="validate space-y-4 max-w-md" @submit.prevent>
        <div class="flex items-center justify-between p-3 bg-base-100 rounded-lg">
          <div>
            <div class="font-semibold">接收通知</div>
            <div class="text-sm text-base-content/70">允许推送通知</div>
          </div>
          <input
            type="checkbox"
            class="switch"
            required
            aria-required="true"
            aria-label="接收通知开关"
            aria-describedby="notification-error"
          />
        </div>
        <p id="notification-error" class="error-message">
          <span class="icon-[lucide--alert-circle] inline-block align-middle"></span>
          必须启用通知才能继续
        </p>
      </form>
    </DocsSection>

    <DocsSection title="浮动标签验证">
      <form class="validate space-y-4 max-w-md" @submit.prevent>
        <div class="input-floating">
          <input
            id="floating-email"
            type="email"
            class="input"
            placeholder="your@email.com"
            required
            aria-required="true"
            aria-describedby="floating-email-error"
          />
          <label for="floating-email" class="input-floating-label"> 电子邮件 </label>
        </div>
        <p id="floating-email-error" class="error-message">
          <span class="icon-[lucide--alert-circle] inline-block align-middle"></span>
          请输入有效的电子邮件地址
        </p>

        <div class="textarea-floating">
          <textarea
            id="floating-message"
            class="textarea"
            placeholder="请输入您的留言"
            rows="4"
            minlength="10"
            required
            aria-required="true"
            aria-describedby="floating-message-error"
          ></textarea>
          <label for="floating-message" class="textarea-floating-label"> 留言内容 </label>
        </div>
        <p id="floating-message-error" class="error-message">
          <span class="icon-[lucide--alert-circle] inline-block align-middle"></span>
          留言至少需要 10 个字符
        </p>
      </form>
    </DocsSection>

    <DocsSection title="完整注册表单">
      <div class="max-w-2xl">
        <form class="validate space-y-4" @submit.prevent>
          <div class="card bg-base-100 border shadow-sm">
            <div class="card-body">
              <h3 class="card-title">创建账号</h3>

              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label for="reg-firstname" class="label">
                    <span class="label-text">名字</span>
                    <span class="label-text-alt text-error">*</span>
                  </label>
                  <input
                    id="reg-firstname"
                    type="text"
                    class="input w-full"
                    placeholder="张"
                    required
                    aria-required="true"
                    aria-describedby="firstname-error"
                  />
                  <p id="firstname-error" class="error-message">请输入您的名字</p>
                </div>

                <div>
                  <label for="reg-lastname" class="label">
                    <span class="label-text">姓氏</span>
                    <span class="label-text-alt text-error">*</span>
                  </label>
                  <input
                    id="reg-lastname"
                    type="text"
                    class="input w-full"
                    placeholder="三"
                    required
                    aria-required="true"
                    aria-describedby="lastname-error"
                  />
                  <p id="lastname-error" class="error-message">请输入您的姓氏</p>
                </div>
              </div>

              <div>
                <label for="reg-email" class="label">
                  <span class="label-text">电子邮件</span>
                  <span class="label-text-alt text-error">*</span>
                </label>
                <input
                  id="reg-email"
                  type="email"
                  class="input w-full"
                  placeholder="your@email.com"
                  required
                  aria-required="true"
                  aria-describedby="reg-email-error reg-email-success"
                />
                <p id="reg-email-error" class="error-message">请输入有效的电子邮件地址</p>
                <p id="reg-email-success" class="success-message">电子邮件格式正确</p>
              </div>

              <div>
                <label for="reg-password" class="label">
                  <span class="label-text">密码</span>
                  <span class="label-text-alt text-error">*</span>
                </label>
                <input
                  id="reg-password"
                  type="password"
                  class="input w-full"
                  placeholder="至少 8 个字符"
                  minlength="8"
                  required
                  aria-required="true"
                  aria-describedby="reg-password-error reg-password-helper"
                />
                <p id="reg-password-helper" class="helper-text">密码应包含字母、数字和特殊字符</p>
                <p id="reg-password-error" class="error-message">密码至少需要 8 个字符</p>
              </div>

              <div>
                <label for="reg-confirm-password" class="label">
                  <span class="label-text">确认密码</span>
                  <span class="label-text-alt text-error">*</span>
                </label>
                <input
                  id="reg-confirm-password"
                  type="password"
                  class="input w-full"
                  placeholder="再次输入密码"
                  minlength="8"
                  required
                  aria-required="true"
                  aria-describedby="confirm-password-error"
                />
                <p id="confirm-password-error" class="error-message">两次输入的密码不一致</p>
              </div>

              <div>
                <label for="reg-phone" class="label">
                  <span class="label-text">手机号码</span>
                  <span class="label-text-alt">可选</span>
                </label>
                <input
                  id="reg-phone"
                  type="tel"
                  class="input w-full"
                  placeholder="13812345678"
                  pattern="1[3-9]\d{9}"
                  aria-describedby="phone-error phone-helper"
                />
                <p id="phone-helper" class="helper-text">用于账号安全验证</p>
                <p id="phone-error" class="error-message">请输入有效的手机号码</p>
              </div>

              <div>
                <label class="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    class="checkbox mt-0.5"
                    required
                    aria-required="true"
                    aria-describedby="reg-terms-error"
                  />
                  <span class="label-text">
                    我已阅读并同意
                    <a href="#" class="link link-primary">用户协议</a>
                    和
                    <a href="#" class="link link-primary">隐私政策</a>
                  </span>
                </label>
                <p id="reg-terms-error" class="error-message">您必须同意用户协议和隐私政策</p>
              </div>

              <div class="flex gap-2 mt-4">
                <button type="button" class="btn btn-ghost flex-1">取消</button>
                <button type="submit" class="btn btn-primary flex-1">创建账号</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </DocsSection>

    <DocsSection title="实时验证反馈">
      <div class="max-w-md">
        <form class="validate space-y-4" @submit.prevent>
          <div class="card bg-base-100 border shadow-sm">
            <div class="card-body">
              <h3 class="card-title text-lg">密码强度检测</h3>

              <div>
                <label for="strength-password" class="label">
                  <span class="label-text">设置密码</span>
                </label>
                <input
                  id="strength-password"
                  type="password"
                  class="input w-full"
                  placeholder="输入密码"
                  minlength="8"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  required
                  aria-describedby="strength-requirements strength-error"
                />

                <div id="strength-requirements" class="mt-3 space-y-2 text-sm">
                  <p class="flex items-center gap-2">
                    <span class="icon-[lucide--check-circle] text-success"></span>
                    <span>至少 8 个字符</span>
                  </p>
                  <p class="flex items-center gap-2 text-base-content/40">
                    <span class="icon-[lucide--circle]"></span>
                    <span>包含大写字母</span>
                  </p>
                  <p class="flex items-center gap-2 text-base-content/40">
                    <span class="icon-[lucide--circle]"></span>
                    <span>包含小写字母</span>
                  </p>
                  <p class="flex items-center gap-2 text-base-content/40">
                    <span class="icon-[lucide--circle]"></span>
                    <span>包含数字</span>
                  </p>
                  <p class="flex items-center gap-2 text-base-content/40">
                    <span class="icon-[lucide--circle]"></span>
                    <span>包含特殊字符 (@$!%*?&)</span>
                  </p>
                </div>

                <p id="strength-error" class="error-message">密码不符合要求，请查看上方提示</p>

                <div class="mt-3">
                  <div class="flex justify-between text-xs mb-1">
                    <span>密码强度</span>
                    <span>弱</span>
                  </div>
                  <div class="flex gap-1">
                    <div class="flex-1 h-1 bg-error rounded"></div>
                    <div class="flex-1 h-1 bg-base-300 rounded"></div>
                    <div class="flex-1 h-1 bg-base-300 rounded"></div>
                    <div class="flex-1 h-1 bg-base-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
