import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        userProfile={props.userProfile}
        status={props.status}
        updateProfileStatus={props.updateProfileStatus}
        isOwner={props.isOwner}
        uploadPhoto={props.uploadPhoto}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
