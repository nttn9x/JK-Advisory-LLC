import React from "react";

import {
  Button,
  Chip,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "components/ui-libraries";
import { ContainerPaper } from "components/ui-own";
import { DeleteIcon, DoneIcon } from "components/icons";

import { useTranslation } from "react-i18next";
import clone from "clone";

const UserItemFormRole: React.FC<any> = (props) => {
  const { roles, values, setFieldValue } = props;
  const { t } = useTranslation();
  const { roleIds = [], rolePageFeatures = [] } = values;
  const [roleId, setRoleId] = React.useState<any>("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRoleId(event.target.value as string);
  };

  const handleClickFeature = (role: any, feature: string) => {
    let rolePageFeatures = values.rolePageFeatures ? clone(values.rolePageFeatures) : [];

    const index = rolePageFeatures.findIndex((r: any) => {
      return r.url === role.url;
    });

    if (index > -1) {
      let features = rolePageFeatures[index].features || [];
      if (features.includes(feature)) {
        rolePageFeatures[index].features = features.filter((f: string) => f !== feature);
      } else {
        features.push(feature);
      }
    } else {
      rolePageFeatures.push({
        id: role.id,
        url: role.url,
        features: [feature],
      });
    }

    setFieldValue("rolePageFeatures", rolePageFeatures);
  };

  const handleRemoveRole = (roleId: string) => {
    let roleIds = values.roleIds || [];

    roleIds = roleIds.filter((e: any) => {
      return e !== roleId;
    });

    const rolePageFeatureNews = rolePageFeatures.filter((e: any) => {
      return e.id !== roleId;
    });

    setFieldValue("roleIds", roleIds);
    setFieldValue("rolePageFeatures", rolePageFeatureNews);
  };

  const addRole = () => {
    if (!roleId) {
      return;
    }
    let roleIds = values.roleIds || [];

    const d = roleIds.find((r: any) => roleId === r);
    if (!d) {
      roleIds = [...roleIds, roleId];
    }
    setRoleId("");

    setFieldValue("roleIds", roleIds);
  };

  return (
    <Grid item xs={12}>
      <ContainerPaper padding>
        <Grid item xs={12} container={true} alignItems={"flex-end"} spacing={3}>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel>{t("pages")}</InputLabel>
              <Select value={roleId} onChange={handleChange}>
                {roles.map((r: any, i: number) => {
                  if (roleIds && roleIds.includes(r.id)) {
                    return null;
                  }
                  return (
                    <MenuItem key={i} value={r.id}>
                      {r.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button onClick={addRole} variant={"contained"}>
              {t("add")}
            </Button>
          </Grid>
          <Grid item xs={12}>
            {roles.map((r: any, i: number) => {
              if (!roleIds || !roleIds.includes(r.id)) {
                return null;
              }
              const rolePageFeature = rolePageFeatures.find((rpf: any) => {
                return rpf.url === r.url;
              });

              let features: any = [];
              if (rolePageFeature) {
                features = rolePageFeature.features || [];
              }

              return (
                <Grid key={i} item xs={12} container={true} alignItems={"center"}>
                  <Grid item xs={12}>
                    <Typography component={"span"}>{r.name}</Typography>
                    <IconButton
                      onClick={() => {
                        handleRemoveRole(r.id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={12}>
                    {r.features &&
                      r.features.map((f: any, j: number) => {
                        return (
                          <Chip
                            style={{ marginLeft: 12 }}
                            key={j}
                            label={f}
                            clickable
                            color={features.includes(f) ? "secondary" : "default"}
                            onClick={() => handleClickFeature(r, f)}
                            onDelete={() => handleClickFeature(r, f)}
                            deleteIcon={<DoneIcon />}
                          />
                        );
                      })}
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </ContainerPaper>
    </Grid>
  );
};

export default UserItemFormRole;
