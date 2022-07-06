import styles from '../styles/settings.module.css';
import { useToasts } from 'react-toast-notifications';
import { useAuth } from '../hooks';
import { useState } from 'react';

const Settings = () => {
  const auth = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(auth.user?.name ? auth.user.name : '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPasword] = useState('');
  const [saving, setSaving] = useState(false);
  const { addToast } = useToasts();

  const updateProfile = async () => {
    setSaving(true);
    let error = false;
    if (!name || !password || !confirmPassword) {
      addToast('Please fill all the fields', {
        position: 'top-center',
        duration: 5000,
      });
      error = true;
    }

    if (password !== confirmPassword) {
      addToast('Make sure password and confirm password matches', {
        position: 'top-center',
        duration: 5000,
      });
      error = true;
    }

    if (error) {
      return setSaving(false);
    }

    const response = await auth.updateUser(
      auth.user._id,
      name,
      password,
      confirmPassword
    );

    if (response.success) {
      setEditMode(false);
      setSaving(false);
      addToast('User details updated successfully', {
        position: 'top-center',
        duration: 5000,
      });
    } else {
      addToast(response.message, {
        position: 'top-center',
        duration: 5000,
      });
    }
    setEditMode(false);
  };

  
  return (
    <div className={styles.settings}>
      <div className={styles.imgContainer}>
        <img
          src='https://cdn-icons-png.flaticon.com/512/456/456283.png'
          alt=''
        />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Email</div>
        <div className={styles.fieldValue}>{auth.user?.email}</div>
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        {!editMode ? (
          <div className={styles.fieldValue}>{auth.user?.name}</div>
        ) : (
          <input
            className={styles.fieldValue}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        )}
      </div>
      {editMode && (
        <>
          <div className={styles.field}>
            <div className={styles.fieldLabel}>Password</div>
            <input
              type='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className={styles.field}>
            <div className={styles.fieldLabel}>Confirm Password</div>
            <input
              type='password'
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPasword(e.target.value);
              }}
            />
          </div>
        </>
      )}
      <div className='btnGrp'>
        {!editMode ? (
          <button
            className={`button ${styles.editBtn}`}
            onClick={() => {
              setEditMode(true);
            }}
          >
            Edit Profile
          </button>
        ) : (
          <>
            <button
              className={`button ${styles.saveBtn}`}
              onClick={updateProfile}
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
            <button
              className={`button ${styles.goBack}`}
              onClick={() => {
                setEditMode(false);
              }}
            >
              Back
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Settings;