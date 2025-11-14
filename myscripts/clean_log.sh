#!/bin/bash

LOG_PATH="/var/log/myapp"

echo "删除超过7天的日志..."
find $LOG_PATH -name "*.log" -mtime +7 -delete

echo "清理完成！"
