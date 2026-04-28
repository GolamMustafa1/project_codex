 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/script.js b/script.js
new file mode 100644
index 0000000000000000000000000000000000000000..013e8bbeb28c1950ff9f8651bedc2ecdc9d600a6
--- /dev/null
+++ b/script.js
@@ -0,0 +1,12 @@
+const updatedDateEl = document.getElementById('updatedDate');
+
+if (updatedDateEl) {
+  const now = new Date();
+  const formatted = now.toLocaleDateString('en-GB', {
+    day: '2-digit',
+    month: 'long',
+    year: 'numeric',
+  });
+
+  updatedDateEl.textContent = `Last updated: ${formatted}`;
+}
 
EOF
)
