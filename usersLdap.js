componentDidMount = () => {
  SFTAxios.get(this.props.getMyFollowersURL).then(({ data = null } = {}) => {
      this.setState({
        projectsInfoObj: Array.isArray(data) && data.length > 0 && data[0].alerts,
        loading: false,
      });
    }
  )
}
