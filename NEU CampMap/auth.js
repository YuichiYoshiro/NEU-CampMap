// ==========================================
// IN-MEMORY AUTHENTICATION & SESSION MANAGEMENT
// ==========================================
let currentUserSession = null;

/**
 * Validates institutional email and password, then navigates to dashboard.html.
 * @param {Event} e - Form submit event
 */
function handleAuthSubmit(e) {
  e.preventDefault();
  try {
    const prefixInput = document.getElementById('authEmailPrefix');
    const passwordInput = document.getElementById('authPassword');

    const prefix = prefixInput ? prefixInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value : '';

    if (!prefix) {
      showAuthError('Please enter your institutional email username.');
      return;
    }
    if (prefix.includes('@')) {
      showAuthError('Enter only the username before @neu.edu.ph');
      return;
    }
    if (password.length < 6) {
      showAuthError('Password must be at least 6 characters long.');
      return;
    }

    const fullEmail = `${prefix.toLowerCase()}@neu.edu.ph`;
    currentUserSession = {
      email: fullEmail,
      name: prefix,
      role: 'Student'
    };

    try {
      sessionStorage.setItem('neu_campmap_session', JSON.stringify(currentUserSession));
    } catch (_) {
      // Fallback to in-memory session when storage is restricted
    }

    updateUserUI(fullEmail);
    window.location.href = 'dashboard.html';
  } catch (err) {
    console.error('Authentication submit error:', err);
    showAuthError('An unexpected error occurred during sign in.');
  }
}

/**
 * Updates header and mobile footer user email labels.
 * @param {string} email
 */
function updateUserUI(email) {
  const desktopEmail = document.getElementById('userProfileEmail');
  const mobileEmail = document.getElementById('mobileUserEmail');
  if (desktopEmail) desktopEmail.textContent = email;
  if (mobileEmail) mobileEmail.textContent = email;
}

/**
 * Clears session state and returns user to login.html.
 */
function logoutUser() {
  try {
    currentUserSession = null;
    try {
      sessionStorage.removeItem('neu_campmap_session');
    } catch (_) {
      // Ignore storage errors
    }

    const prefixEl = document.getElementById('authEmailPrefix');
    const passEl = document.getElementById('authPassword');
    if (prefixEl) prefixEl.value = '';
    if (passEl) passEl.value = '';
    hideAuthError();

    window.location.href = 'login.html';
  } catch (err) {
    console.error('Logout error:', err);
  }
}

/**
 * Displays an authentication error message banner.
 * @param {string} msg
 */
function showAuthError(msg) {
  const errBox = document.getElementById('authErrorMsg');
  const errText = document.getElementById('authErrorText');
  if (errText) errText.textContent = msg;
  if (errBox) errBox.classList.remove('hidden');
}

/**
 * Hides the authentication error banner.
 */
function hideAuthError() {
  const errBox = document.getElementById('authErrorMsg');
  if (errBox) errBox.classList.add('hidden');
}

// Hydrate session label on load if available
window.addEventListener('DOMContentLoaded', () => {
  try {
    const saved = sessionStorage.getItem('neu_campmap_session');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.email) {
        currentUserSession = parsed;
        updateUserUI(parsed.email);
      }
    }
  } catch (_) {
    // Keep default label
  }
});