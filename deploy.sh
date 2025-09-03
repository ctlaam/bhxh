GNU nano 4.8                                                                                  deploy.sh                                                                                             
#!/bin/bash
APP_NAME="fe-bhxh"
APP_DIR="/home/deploy/bhxh"
GIT_URL="https://github.com/ctlaam/bhxh.git"
BRANCH="main"

echo "🚀 Bắt đầu deploy $APP_NAME ..."

# Nếu chưa có thư mục -> clone mới
if [ ! -d "$APP_DIR/.git" ]; then
    echo "📥 Clone repo lần đầu ..."
    git clone -b $BRANCH $GIT_URL $APP_DIR
fi

cd $APP_DIR || exit 1

# Lấy code mới nhất
echo "🔄 Pull code mới nhất từ $BRANCH ..."
git reset --hard
git pull origin $BRANCH

# Cài dependencies
echo "📦 Cài dependencies ..."
npm install --production

# Build (nếu cần, ví dụ có script build)
if [ -f package.json ] && grep -q "\"build\"" package.json; then
    echo "🏗️ Build project ..."
    npm run build
fi

# Restart với PM2
echo "🔁 Restart PM2 ..."
pm2 delete $APP_NAME 2>/dev/null
pm2 start server.js --name $APP_NAME

# Lưu cấu hình pm2 để tự khởi động lại sau reboot
pm2 save

echo "✅ Deploy hoàn tất!"
