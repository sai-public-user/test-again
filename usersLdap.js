componentDidMount = () => {
  this.setState({ loading: true }, () => {
    SFTAxios.get(this.props.getMyFollowersURL).then(({ data = null } = {}) => {
      const alerts = Array.isArray(data) && data.length > 0 ? data[0].alerts : [];
      this.setCompleteFollowersData(alerts);
      this.setState({
        projectsInfoObj: alerts,
      });
    }).catch( err => this.setState({ loading: false }));
  })
}

const setCompleteFollowersData = async (res) => {
  const users = await Array.isArray(res) && res.map(one => {
    const { last_updated_user = '' } = one;
    SFTAxios.post(this.props.getUserByLdapURL, { value: last_updated_user }).then((sres) => {
      const { data = null } = sres;
      const [cn = '', sAMAccountName = ''] = Array.isArray(data) ? data[0] : {};
      const follower_name =  `${cn}, ${sAMAccountName}`;
      one.follower_name = follower_name
      return one;
    });
    console.log(users)
    await this.setState({
      users,
      loading: false,
    })

  })
}


searchChange = ({ target: { value }}) => {
    this.setState({ searchKey: value, radiosChecked: [] });
    setTimeout(() => {
        const { allRows, searchKey } = this.state;
        const rows = allRows.filter(one => JSON.stringify(one).indexOf(searchKey) > -1);
        this.setState({ rows });
    }, 300);
}
